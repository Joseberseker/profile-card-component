import ImagePatternCard from "../assets/images/bg-pattern-card.svg";
import ImageVictor from "../assets/images/image-victor.jpg";


export function Card() {
  return (
    <div className="bg-white rounded-[15px] overflow-hidden text-center relative sm:w-[350px]">
      <img src={ImagePatternCard} alt="background card" />
      <img
        className="rounded-full border-4 border-white absolute top-[76px] left-0 right-0 m-auto"
        src={ImageVictor}
        alt="image profile"
      />
      <div className="p-6 pt-[68px]">
        <h2 className="text-lg font-bold">
          Victor Crest <span className="font-normal text-Dark-gray">26</span>
        </h2>
        <p className="text-Dark-gray">London</p>
      </div>
      <hr className="text-Dark-gray/30"/>
      <div className="flex place-content-between py-4 px-11">
        <div>
          <p className="text-lg font-bold">80K</p>
          <p className="text-Dark-gray text text-[10px] tracking-[.0938rem]">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold">803K</p>
          <p className="text-Dark-gray text text-[10px] tracking-[.0938rem]">Likes</p>
        </div>
        <div>
          <p className="text-lg font-bold">1.4K</p>
          <p className="text-Dark-gray text text-[10px] tracking-[.0938rem]">Photos</p>
        </div>
      </div>
    </div>
  );
}
