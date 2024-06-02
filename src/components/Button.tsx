import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "warning" | "danger" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

export default function Button({ children, variant, ...rest }: TButton) {
  return (
    <button
      {...rest}
      style={{
        borderRadius: "10px",
        padding: "5px 10px",
        ...checkVariant(variant),
      }}
    >
      {children}
    </button>
  );
}

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#0064FA", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
}
