import { Checkbox } from "@/components/ui/checkbox";

function CheckboxList({ names, type }) {
    return (
        <div>
            {names.map((name, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2 ml-2">
                    <Checkbox id={`${type}_${index}`} className="border-white"/>
                    <label htmlFor={`${type}_${index}`} className="text-sm font-medium leading-none">
                        {name}
                    </label>
                </div>
            ))}
        </div>
    );
}

export { CheckboxList };
