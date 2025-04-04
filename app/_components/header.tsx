"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => {

    return ( 
        <Card>
            <CardContent className="px-5 py-6 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={22} width={120}/>
                
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon size={18}/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>

            </CardContent>
        </Card>
     );
}
 
export default Header;