import React from "react";

export default function Introduction() {
  return (
    <article className="flex flex-col items-center text-center gap-4 py-12 px-8 my-8 bg-gray-200 rounded-lg">
      <section>
        <h4 className="text-2xl font-bold">Who am I?</h4>
        <p>개발을 사랑하는 풀스택 개발자</p>

        <p>사람과 디자인을 담는 웹앱을 만들고 있음</p>
      </section>
      <section>
        <h4 className="text-2xl font-bold">Career</h4>
        <p>구글러 (-now)</p>
        <p>메이스북 (-2019)</p>
        <p>삼준전자 (-2015)</p>
      </section>
      <section>
        <h4 className="text-2xl font-bold">Skills</h4>
        <p>React, Vue, Node</p>
        <p>Git, Clean Code</p>
        <p>VS Code, Intellij, MongoDB</p>
      </section>
    </article>
  );
}
