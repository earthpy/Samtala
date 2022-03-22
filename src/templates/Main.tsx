import { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-8 pt-4 w-full antialiased text-zinc-800">
    {props.meta}

    <div className="mx-auto">
      <div className="container mx-auto max-w-screen-md">
        <div className="box-border py-6">
          <div className="text-6xl font-bold text-orange-500">
            <a
              href="#"
              className="hover:text-zinc-800 transition duration-500 ease-in-out"
            >
              {AppConfig.title}
            </a>
          </div>
        </div>
      </div>

      <div className="content">{props.children}</div>

      <div className="pb-6 text-2xl font-normal text-center">
        <h1>
          Lets talk! 🤝{' '}
          <span className="font-semibold hover:text-orange-500 transition duration-500 ease-in-out">
            info@samtala.co.uk
          </span>
        </h1>
      </div>

      <div className="py-6 text-sm text-center border-t border-gray-300">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
        <br></br>
        Email us at info@samtala.co.uk
      </div>
    </div>
  </div>
);

export { Main };
