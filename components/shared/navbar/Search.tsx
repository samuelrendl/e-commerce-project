import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchProps {
    customStyle?: String;
    
}

const Search = ({customStyle}: SearchProps) => {
  return (
    <div className={`w-full max-w-[400px] ${customStyle}`}>
      <div className="flex border-solid border rounded-full">
        <Input
          type="text"
          placeholder="Search"
          className="border-none shadow-none no-focus"
        />
        <Button variant={'ghost'} className="rounded-full">
          <MagnifyingGlassIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default Search;
