import { Text } from "@/components/ui";
import { Database } from "@/utils/schema";

type TextmodCardProps = {
  textmod: Database["public"]["Tables"]["mods"]["Row"];
  creatorName: string;
  commentCount: number;
  upvotes: number;
  downvotes: number;
  createdDate: Date;
};

export const TextmodCard = ({
  commentCount,
  creatorName,
  downvotes,
  textmod,
  upvotes,
  createdDate,
}: TextmodCardProps) => {
  return (
    <div className="w-full flex flex-col border border-secondary">
      <div className="flex flex-col p-2">
        <div>
          <Text onHover fontSize="2xl" fontType="heading" variant="accent">
            {textmod.name}
          </Text>
          <Text fontSize="xl" fontType="body">{textmod.description}</Text>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between">
          <Text tag="span" fontType="body" onHover>{creatorName}</Text>
          <Text tag="span" fontType="body">{createdDate.toDateString()}</Text>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between flex-row">
            <Text fontSize="base" fontType="body" onHover onClick={() => {}}>
              Comments: {commentCount}
            </Text>
            <div className="flex flex-row justify-between w-1/6">
              <Text fontSize="xl" variant="success" fontType="heading" onHover onClick={() => {}}>
              ↑{upvotes}
              </Text>
              <Text fontSize="xl" variant="danger" fontType="heading" onHover onClick={() => {}}>
              ↓{downvotes}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};