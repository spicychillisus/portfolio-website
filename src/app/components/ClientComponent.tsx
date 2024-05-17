// components/ClientComponent.tsx

import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function ClientComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
      <AiOutlineMenu size={25} />
    </div>
  );
}