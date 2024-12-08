import { ContentType } from "@src/types/user/setRequest/contentType.type";

export default function ReqContent({
  content,
  onSelect,
}: {
  content: { selected: boolean } & ContentType;
  onSelect: () => void;
}) {
  return (
    <div className="flex items-center rounded-[2.625rem] text-black">
      {content.selected ? (
        <button
          className="bg-busGreen flex w-full items-center rounded-[2.625rem] p-[1.19rem] border-[0.25rem]"
          onClick={onSelect}
        >
          <img src="/icons/user/setRequest/checked.svg" alt="" />
          <div className="flex w-full ms-[1.06rem]">
            <span className="text-Bold45 text-white break-keep text-left">
              {content.title}
            </span>
          </div>
        </button>
      ) : (
        <div
          className=" flex w-full items-center rounded-[2.625rem] p-[1.19rem] border-[0.25rem] border-[#B4B4B4]"
          onClick={onSelect}
        >
          <img src="/icons/user/setRequest/unchecked.svg" alt="" />
          <div className="flex w-full ms-[1.06rem]">
            <span className="text-Regular45 break-keep text-left">
              {content.title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
