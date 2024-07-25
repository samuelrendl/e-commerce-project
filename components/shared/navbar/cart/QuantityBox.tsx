import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

const QuantityBox = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <Button variant={'outline'} size={"sm"}> - </Button>
      <Input type="number" size={1} min={1} className="w-12 h-8 text-center" />
      <Button variant={'outline'} size={"sm"}> + </Button>
    </div>
  );
};

export default QuantityBox;
