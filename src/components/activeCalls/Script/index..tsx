import React from "react";
import Navigator from "@/utils/customNavigator";
const Script = () => {
  const [activeTitle, setActiveTitle] = React.useState(0);
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }

  const titles = ["SCRIPT", "SCRIPT LIST", "DOCUMENTS", "DETAILS"];
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  return (
    <div className="w-full p-[30px]">
      <Navigator callback={CallBack} current={0} list={list} />
      {activeTitle === 0 && (
        <div className="w-full h-[900px] bg-[#ccc] p-[30px]">
          <div className="w-full h-full bg-white px-[30px] py-[60px]">
            <p className="text-black font-medium uppercase text-[14px] tracking-wider" >
              Lorem ipsum dolor sit amet. Qui totam sunt et rerum galisum est
              aspernatur voluptatem quo eligendi repellat aut tempora quis ut
              similique facilis. Ut soluta autem eum debitis cumque id maxime
              dicta qui cupiditate fugiat. Et porro totam in quia debitis ut
              doloremque fugit. Aut tempore commodi eum beatae quia est tempora
              molestias sit nobis incidunt et corporis animi est quia quia. Qui
              quia repellat et dolores accusantium in rerum cupiditate est
              molestias explicabo. Et quia voluptate qui quam provident ad odio
              saepe. Eum tempora quia sit eveniet ipsam. Eum temporibus
              voluptatem id magni delectus qui earum accusantium. Aut minima
              facilis aut reiciendis itaque sit dolores eaque non itaque dolores
              in mollitia voluptate et voluptas neque. Aut nemo eius aut iusto
              quia id fuga error quo neque dolore non quasi provident ut
              explicabo nulla et dolorum dolor. Non repellat dolores in quis
              architecto qui ratione suscipit. Est consectetur vero vel nesciunt
              nobis ut atque consequatur est totam vitae ut repellat architecto
              hic recusandae dolorem! Lorem ipsum dolor sit amet. Qui totam sunt
              et rerum galisum est aspernatur voluptatem quo eligendi repellat
              aut tempora quis ut similique facilis. Ut soluta autem eum debitis
              cumque id maxime dicta qui cupiditate fugiat. Et porro totam in
              quia debitis ut doloremque fugit. Aut tempore commodi eum beatae
              quia est tempora molestias sit nobis incidunt et corporis animi
              est quia quia. Qui quia repellat et dolores accusantium in rerum
              cupiditate est molestias explicabo. Et quia voluptate qui quam
              provident ad odio saepe. Eum tempora quia sit eveniet ipsam. Eum
              temporibus voluptatem id magni delectus qui earum accusantium.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Script;
