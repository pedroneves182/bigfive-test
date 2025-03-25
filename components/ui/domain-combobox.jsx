"use client"

import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


const domains = [
  {
    value: "all",
    label: "Todos",
  },
  {
    value: "N",
    label: "Neuroticismo",
  },
  {
    value: "A",
    label: "Amabilidade",
  },

];

export default function DomainCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-between border-blue-900 min-h-12"
        >
          <div className="flex flex-col items-start">
            <span className="text-sm">Selecione um domínio...</span>
            <span className="text-xs">{domains.find((domain) => domain.value === value)?.label}</span>
          </div>
          {/* {value
            ? domains.find((domain) => domain.value === value)?.label
            : "Selecione um domínio..."} */}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-75 text-blue-900" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup heading="Domínios">
              {domains.map((domain) => (
                <CommandItem key={domain.value}
                  value={domain.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false)
                  }}>
                  {console.log(domain.value)}
                  {console.log('value: ', value)}
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === domain.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {domain.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>

        </Command>
      </PopoverContent>
    </Popover >
  );
}
