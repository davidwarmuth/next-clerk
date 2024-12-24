import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <header className="py-4 border-b">
      <nav className="container flex gap-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-semibold">
            <Link href="/">NSC Template</Link>
          </h1>
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            <li>
              <Link href="/protected/server">Protected (server)</Link>
            </li>
            <li>
              <Link href="/protected/client">Protected (client)</Link>
            </li>
            <li>
              <Link href="/api/me">API (protected)</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8">
              <SheetHeader>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/">NCS Template</Link>
                  </SheetClose>
                </SheetTitle>
                <SheetDescription>
                  A NextJS starter template with Clerk authentication, shadcn/ui
                  and Tailwind CSS.
                </SheetDescription>
              </SheetHeader>
              <Separator />
              <ul className="flex flex-col gap-8 text-sm font-medium">
                <li>
                  <SheetClose asChild>
                    <Link href="/protected/server">Protected (server)</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/protected/client">Protected (client)</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/api/me">API (protected)</Link>
                  </SheetClose>
                </li>
              </ul>
              <div className="mt-auto flex gap-4">
                <SheetClose asChild>
                  <div>
                    <ThemeToggle />
                  </div>
                </SheetClose>
                <SignedOut>
                  <SignInButton mode="modal">
                    <SheetClose asChild>
                      <Button className="flex-1">Sign in</Button>
                    </SheetClose>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
