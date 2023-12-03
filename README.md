# Next.js + Strapi E-commerce storefront

Custom E-commerce storefront using Next.js and Strapi CMS.

![Screenshot](https://github.com/ilinieja/nextjs-strapi-ecommerce-storefront/assets/15740660/af1eefd7-5507-476f-a930-0bf308854024)
![Screenshot](https://github.com/ilinieja/nextjs-strapi-ecommerce-storefront/assets/15740660/2e1c643b-3a36-4500-8c32-cc4a488c2bb9)
![Screenshot](https://github.com/ilinieja/nextjs-strapi-ecommerce-storefront/assets/15740660/2dc44937-d5ff-418d-80e0-7993566f2069)

## Tech stack

### [Next.js](https://nextjs.org/)

Main framework for UI and API layers.

### [Strapi](https://strapi.io/)

CMS for products and content storage and administration

## Development

To start app the app locally in live-reload/debug mode you need to:

- Create `.env` file in `drone-rental-storefront-frontend` and `drone-rental-storefront-cms` roots and copy respective `.env.example` contents into it.
Each env var has description in the comment, change if needed (defaults are supposed to work fine though).

- Import local data for development using [`npm run strapi import -- -f backups/local.tar.gz.enc`](https://docs.strapi.io/dev-docs/data-management/import)

- Run `npm run dev` from project root. Frontend will be available on port 3000 (default Next.js port) and CMS on port 1337 (default Strapi port).

