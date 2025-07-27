export type CourseHead ={
    title: string,
    description: string;
}

export interface NavItemProps {
  label: string;
  href: string;
  dropdown?: boolean;
}

export interface MobileNavItemProps {
  label: string;
  href?: string;
  dropdown?: boolean;
}
