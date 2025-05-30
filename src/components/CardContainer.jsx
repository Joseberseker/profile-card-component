import { Card } from "./Card";
import ImagePatternBottom from "../assets/images/bg-pattern-bottom.svg";
import ImagePatternTop from "../assets/images/bg-pattern-top.svg";

export function CardContainer() {
  return (
    <body className="h-screen grid place-content-center bg-Dark-cyan font-Kumbh-Sans  overflow-hidden">
      <img
        className="absolute top-[-250px] left-[-250px] w-[622px] sm:w-[978px] sm:top-[-600px] sm:[-200px]"
        src={ImagePatternTop}
        alt="pattern top"
      />
      <img
        className="absolute bottom-[-200px] right-[-250px] w-[622px] sm:w-[978px] sm:bottom-[-600px] sm:right-[-200px]"
        src={ImagePatternBottom}
        alt="pattern bottom"
      />
      <Card />
    </body>
  );
}
