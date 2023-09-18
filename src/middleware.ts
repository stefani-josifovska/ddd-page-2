import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

async function getLocales() {
  const locales = await fetch('https://e-invoices.online/json.rpc', {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'Auth.GetSupportedCultures',
      params: {},
      id: 1,
    }),
    credentials: 'include',
  });

  const data = await locales.json();

  let culturesOnly = data.result.map((culture: any) => culture.Culture);

  return culturesOnly;
} // Get the supported locales from the API

export default async function middleware(request: NextRequest) {
  const supportedLocales: string[] = await getLocales(); // Get the supported locales from the API
  // console.log(request.cookies.has('d3pro.preferred-culture'), 'Cookies');
  const pathname = request.nextUrl.pathname; // Get the pathname from the request
  const browserLocalLanguage = request.headers
    .get('accept-language')
    ?.split(',')[0]; // Get the browser language from the request
  let preferredCulture = request.cookies.get('d3pro.preferred-culture')?.value; // Get the preferred culture from the request

  const response = NextResponse.next();

  if (!preferredCulture) {
    if (
      browserLocalLanguage &&
      supportedLocales.includes(browserLocalLanguage)
    ) {
      preferredCulture = browserLocalLanguage;
    } // Set the preferred culture to the browser language if it is supported
    else {
      preferredCulture = supportedLocales[0];
    } // Set the preferred culture to the first supported locale if the browser language is not supported
  } // Set the preferred culture to the browser language if it is not set

  const pathnameIsMissingLocale = supportedLocales.every(
    (supportedLocales) =>
      !pathname.startsWith(`/${supportedLocales}/`) &&
      pathname !== `/${supportedLocales}`
  ); // Check if the pathname is missing a locale

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${preferredCulture}/${pathname}`, request.url)
    );
  } // Redirect to the first supported locale if the pathname is missing a locale

  console.log(preferredCulture);

  response.cookies.set('d3pro.preferred-culture', pathname.split('/')[1], {
    path: '/',
    sameSite: 'strict',
    secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
  }); // Set the cookie to the first supported locale

  return response;
}

export const config = {
  matcher: '/((?!_next).*)',
};
