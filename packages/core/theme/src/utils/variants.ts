const solid = {
  neutral: "bg-neutral text-neutral-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background",
};

const shadow = {
  neutral: "shadow-lg shadow-neutral/50 bg-neutral text-neutral-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background",
};

const bordered = {
  neutral: "bg-transparent border-neutral text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground",
};

const flat = {
  neutral: "bg-neutral-100 text-neutral-foreground",
  primary: "bg-primary-50 text-primary",
  secondary: "bg-secondary-100 text-secondary",
  success: "bg-success-50 text-success",
  warning: "bg-warning-50 text-warning",
  danger: "bg-danger-50 text-danger",
  foreground: "bg-foreground/10 text-foreground",
};

const faded = {
  neutral: "border-neutral bg-neutral-100 text-neutral-foreground",
  primary: "border-neutral bg-neutral-100 text-primary",
  secondary: "border-neutral bg-neutral-100 text-secondary",
  success: "border-neutral bg-neutral-100 text-success",
  warning: "border-neutral bg-neutral-100 text-warning",
  danger: "border-neutral bg-neutral-100 text-danger",
  foreground: "border-neutral bg-neutral-100 text-foreground",
};

const light = {
  neutral: "bg-transparent text-neutral-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground",
};

const ghost = {
  neutral: "border-neutral text-neutral-foreground hover:!bg-neutral",
  primary: "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
  secondary: "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
  success: "border-success text-success hover:!text-success-foreground hover:!bg-success",
  warning: "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
  danger: "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground",
};

export const colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost,
};
