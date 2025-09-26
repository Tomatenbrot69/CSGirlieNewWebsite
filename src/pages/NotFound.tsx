import { constant } from "../i18n/data.ts";

export const NotFound = () => {
  return (
    <div className="">
      <p> {constant.notFoundPage.text.header}</p>
    </div>
  );
};
