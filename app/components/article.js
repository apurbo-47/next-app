import React from "react";
import Image from "next/image";
import hero1 from "../../public/images/a9c798ef934506f09934f6ed0bfcc0214ce289a5.png";
import hero2 from "../../public/images/bb95c52f121f8c919539b3287fabb4d61464f72e.png";

function Article() {
  return (
    <div className="space-y-14">
      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          1. Making Learning More Interactive
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The education landscape is evolving quickly, with digital tools
          becoming essential for modern classrooms. With digital tools,
          interactive content, and collaborative technologies, learning is more
          engaging than ever.
        </p>
      </section>
      {/* Section 2 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          2. Improving Teacher–Student Engagement
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Small classrooms give teachers more ways to connect with students.
          Teachers can use videos, live quizzes, animations, and digital
          activities to explain complex topics more effectively.
        </p>

        <Image
          src={hero1}
          alt="Teacher"
          width={800}
          height={500}
          className="rounded-xl object-cover"
        />
      </section>
      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          3. Access to a World of Learning Resources
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          World-class resources give access to online books, learning apps,
          educational websites, and videos. Students are no longer limited to
          textbooks.
        </p>

        <Image
          src={hero2}
          alt="Library"
          className="rounded-xl object-cover w-200 h-80"
        />
      </section>
      {/* Section 4 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          4. Digital Tools That Make Learning Easier
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Smart classrooms are reshaping the future of education. By combining
          interactive technology with modern teaching methods, schools can
          create exciting, engaging, and effective learning environments.
          Students learn faster, understand better, and feel more inspired in a
          smart classroom — making education meaningful and future-ready.
        </p>
      </section>
    </div>
  );
}

export default Article;
