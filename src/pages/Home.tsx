import { Page, PageContent } from 'components/layout/page';

export function Home() {
  return (
    <Page>
      <PageContent>
        <div className="flex flex-col items-center space-y-2 px-3 py-8 lg:px-8">
          <p className="font-primary text-3xl font-bold">
            React + Typescript + Vite + Tailwind Boilerplate
          </p>
        </div>
      </PageContent>
    </Page>
  );
}
