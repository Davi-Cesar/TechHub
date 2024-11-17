import React from "react";

interface ButtonPDFProps {
  onClick: () => void;
  label?: string;
}

const ButtonPDF: React.FC<ButtonPDFProps> = ({
  onClick,
  label = "Gerar PDF",
}) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary mt-1 px-4 py-2 rounded-md shadow-md hover:bg-primary-focus active:bg-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
    >
      {label}
    </button>
  );
};

export default ButtonPDF;
