import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import profileImg from "@/assets/profile.jpg";


export function ManageProfile() {
  return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Manage Profile</h2>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={profileImg}
                className="w-16 h-16 rounded-full object-cover"
                alt=""
              />
              <div>
                <p className="font-semibold">Ahmad AL-Ahmad</p>
                <button className="text-primary text-sm cursor-pointer">
                  Change image
                </button>
              </div>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <Label>First name</Label>
                <Input placeholder="Ahmad" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Last name</Label>
                <Input placeholder="AL-Ahmad" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Username</Label>
                <Input placeholder="@ahmad" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Phone</Label>
                <Input placeholder="+44 254 236 5891" />
              </div>

              <div className="flex flex-col space-y-2 md:col-span-2">
                <Label>Email</Label>
                <Input placeholder="ahmad@gmail.com" />
              </div>
            </div>

            <Button className="mt-8 bg-primary hover:bg-primary text-background px-8">
              Save Change
            </Button>
          </div>

  );
}
