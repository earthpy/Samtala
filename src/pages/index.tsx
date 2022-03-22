import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Samtala - Experts in translation"
          description="Samtala specialises in translation services for creators."
        />
      }
    >
      <div className="container mx-auto max-w-screen-md">
        <div className="grid grid-cols-1 gap-6 justify-between items-center mb-16 md:grid-cols-2">
          <div className="grid justify-center">
            <h1 className="inline mb-4 text-4xl font-semibold">
              {AppConfig.description}
            </h1>
            <h2 className="inline text-2xl font-normal">
              We are a team of{' '}
              <span className="font-semibold">language-lovers</span> that
              specialise in translating your{' '}
              <span className="font-semibold">media</span> content, so that you
              can <span className="font-semibold">reach new audiences </span>
              <span role="img" aria-label="rocket">
                🚀
              </span>{' '}
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              src={`${router.basePath}/assets/images/hero_img.jpg`}
              alt="Podcast"
              className="w-96 rounded-lg shadow-sm md:w-72"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-wrap pt-8 mx-auto">
          <div className="flex flex-col grow shrink items-center my-4 w-full text-center bg-stone-100 rounded-lg shadow-sm hover:shadow-lg transition duration-500 ease-in-out md:mr-4 md:w-1/4">
            <img
              src={`${router.basePath}/assets/images/video-call.png`}
              alt="Video Dubbing"
              className="py-4 w-16"
              loading="lazy"
            />
            <h2 className="px-4 w-full text-xl font-semibold">
              <span>Video dubbing</span>
            </h2>
            <p className="px-2 text-lg font-normal">
              Male and Female voiceovers
              <br></br>Full commercial license
            </p>
          </div>

          <div className="flex flex-col grow shrink items-center my-4 w-full text-center bg-stone-100 rounded-lg shadow-sm hover:shadow-lg transition duration-500 ease-in-out md:mr-4 md:w-1/4">
            <img
              src={`${router.basePath}/assets/images/skill.png`}
              alt="Multi-lingual"
              className="py-4 w-16"
              loading="lazy"
            />
            <h2 className="px-4 w-full text-xl font-semibold">
              <span>Multi-lingual</span>
            </h2>
            <p className="px-2 text-lg font-normal">
              We can translate into Spanish, Portuguese, Indian, Russian and
              more
            </p>
          </div>

          <div className="flex flex-col grow shrink items-center my-4 w-full text-center bg-stone-100 rounded-lg shadow-sm hover:shadow-lg transition duration-500 ease-in-out md:mr-4 md:w-1/4">
            <img
              src={`${router.basePath}/assets/images/growth.png`}
              alt="Grwoth"
              className="py-4 w-16"
              loading="lazy"
            />
            <h2 className="px-4 w-full text-xl font-semibold">
              <span>Market globally</span>
            </h2>
            <p className="px-2 text-lg font-normal">
              We can make your content reach customers in countries all over the
              world
            </p>
          </div>
        </div>
      </div>

      <div className="container pt-16 mx-auto max-w-screen-md">
        <div className="grid grid-cols-1 gap-6 justify-between items-center mb-16 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={`${router.basePath}/assets/images/mrbeast.jpg`}
              alt="Podcast"
              className="w-96 rounded-lg shadow-sm md:w-fill"
              loading="lazy"
            />
          </div>
          <div className="grid justify-center text-right">
            <h1 className="inline mb-4 text-2xl font-bold ">
              “90% of the world can't even watch my content…”
            </h1>
            <h2 className="inline text-xl font-bold hover:text-orange-500 transition duration-500 ease-in-out">
              MrBeast
            </h2>
            <h3 className="text-justify	text-md">
              With over <b>91.8M YouTube Subscribers</b>, MrBeast launched a new
              channel in July 2021, 'MrBeast en Español', dedicated to
              Spanish-dubbs of his latest videos. The Spanish channel has been
              extremely lucrative already, amassing over <b>1.5B views</b>.
            </h3>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
