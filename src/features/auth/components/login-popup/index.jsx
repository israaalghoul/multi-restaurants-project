import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { appRoutes } from "../../../../routes/app-routes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { usePopupStore } from "@/store/popup-signup-store";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";

export function LoginPopup() {
  const { modal, openSignUp, closeModal } = usePopupStore();
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = modal === "login";
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className=" w-[450px] bg-background p-6 py-14 rounded-lg border-0 flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Log in</DialogTitle>
        </DialogHeader>

        <div className="w-full md:w-[89.56%]">

                    <Input
            name="email"
            placeholder="Email"
            className="placeholder:text-foreground bg-background shadow-none focus-visible:border-primary focus-visible:ring-transparent mb-4"
          />
          <div className="flex flex-col gap-1 relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="placeholder:text-foreground bg-background shadow-none focus-visible:border-primary focus-visible:ring-transparent mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <Button className="bg-primary text-background hover:bg-red-600 w-full">
            Log in
          </Button>
          <div className="flex items-center gap-3 my-6">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <Button
            variant="outline"
            className="w-full flex gap-2 py-5 mb-4 border-border text-foreground hover:bg-muted hover:text-foreground"
          >
            <Mail size={18} />
            Continue with Google
          </Button>

          <Button
            variant="outline"
            className="w-full flex gap-2 py-5 border-border text-foreground hover:bg-muted hover:text-foreground"
          >
            <Facebook size={18} />
            Continue with Facebook
          </Button>

          <p className="text-center text-sm text-foreground mt-3">
            New in termbi?
            <span
              className="text-primary ml-1 cursor-pointer"
              onClick={openSignUp}
            >
              Create new account
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
