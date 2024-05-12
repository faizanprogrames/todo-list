import { JSX, SVGProps } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@components/ui/checkbox";

export default function TodoList() {
  return (
    <div className="bg-[#6c5ce7] min-h-screen p-4">
      <div className="bg-white max-w-sm mx-auto rounded-lg shadow-md">
        <div className="flex items-center p-4 border-b">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
            <Input className="pl-8 pr-12 w-full" placeholder="Search tasks" />
          </div>
          <Button className="bg-[#6c5ce7] text-white ml-2">
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
        <ul className="divide-y divide-gray-100">
          <li className="flex items-center p-4">
            <Checkbox id="task-1" />
            <label className="flex-1 ml-2 text-sm font-medium" htmlFor="task-1">
              Styleguide creation
            </label>
            <div className="flex itmes-center space-x-2">
              <SquarePenIcon className="text-gray-400 cursor-pointer" />
              <TrashIcon className="text-gray-400 cursor-pointer" />
            </div>
          </li>
          <li className="flex items-center p-4">
            <Checkbox id="task-2" />
            <label className="flex-1 ml-2 text-sm font-medium" htmlFor="task-2">
              Send wireframes
            </label>
            <div className="flex itmes-center space-x-2">
              <SquarePenIcon className="text-gray-400 cursor-pointer" />
              <TrashIcon className="text-gray-400 cursor-pointer" />
            </div>
          </li>
          <li className="flex items-center p-4">
            <Checkbox id="task-3" />
            <label className="flex-1 ml-2 text-sm font-medium" htmlFor="task-3">
              Readability About page
            </label>
            <div className="flex itmes-center space-x-2">
              <SquarePenIcon className="text-gray-400 cursor-pointer" />
              <TrashIcon className="text-gray-400 cursor-pointer" />
            </div>
          </li>
          <li className="flex items-center p-4">
            <Checkbox id="task-4" />
            <label className="flex-1 ml-2 text-sm font-medium" htmlFor="task-4">
              Check color contrast
            </label>
            <div className="flex itmes-center space-x-2">
              <SquarePenIcon className="text-gray-400 cursor-pointer" />
              <TrashIcon className="text-gray-400 cursor-pointer" />
            </div>
          </li>
        </ul>
        <div className="flex justify-center p-4">
          <Button className="bg-[#6c5ce7] text-white">+ New task</Button>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function SquarePenIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
    </svg>
  );
}
