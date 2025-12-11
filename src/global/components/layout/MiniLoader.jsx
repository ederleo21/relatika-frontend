import { Spinner } from "flowbite-react";

export const MiniLoader = () => {
  return (
    <Spinner
      color="info"
      size="md"
      aria-label="Small loading spinner"
      className="w-6 h-6"
    />
  );
};
