"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Scale, User, LogIn } from "lucide-react";
import { SearchButton } from "@/components/ui/search-btn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center px-2 mx-auto justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-8 w-8" />
          <span className="font-bold text-xl">ADVONEX</span>
        </Link>
        <Button size="sm" asChild>
            <Link href="/signup">
              <LogIn className="mr-2 h-4 w-4" />
              Login
          </Link>
          </Button>  
      </div>
    </header>
  );
}





{/* <nav className="hidden md:flex items-center space-x-6">
          <Link href="/lawyers" className="text-foreground/60 hover:text-foreground">
            Find Lawyers
          </Link>
          <Link href="/how-it-works" className="text-foreground/60 hover:text-foreground">
            How it Works
          </Link>
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/register">
              <UserPlus className="mr-2 h-4 w-4" />
              Register
            </Link>
          </Button>
          
        </nav> */}