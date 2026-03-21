import AboutData, { type Sections,type Languages} from "../utils/DataConfig";

type SelectedLang = {
  language : keyof Languages
}



const AboutUs = ({language}:SelectedLang) => {


  const data : Sections = AboutData?.[language]

  const {section_1,section_2,section_3,section_4,section_5,section_6,section_7, section_8} = data || {}


  return (
    <div className="flex flex-col gap-12 px-6 md:px-20 py-12">

      {/* SECTION 1 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_1?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
         {section_1?.description}
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_2?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
                 {section_2?.description}

        </p>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_3?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
                   {section_3?.description}

        </p>
      </section>

      {/* SECTION 4 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_4?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
                  {section_4?.description}

        </p>
      </section>

      {/* SECTION 5 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_5?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
         {section_5?.description}

        </p>
      </section>

      {/* SECTION 6 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_6?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
                   {section_6?.description}

        </p>
      </section>

      {/* SECTION 7 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_7?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
                   {section_7?.description}

        </p>
      </section>

      {/* SECTION 8 */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          {section_8?.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
        {section_8?.description}
        </p>
      </section>

    </div>
  );
};

export default AboutUs;