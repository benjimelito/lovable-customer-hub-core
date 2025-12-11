import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Linkedin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
export interface AccountExecutive {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  email: string;
  phone?: string;
  calendlyUrl: string;
  linkedInUrl?: string;
  bio: string;
}
interface AEInfoCardProps {
  ae: AccountExecutive;
}
const AEInfoCard: React.FC<AEInfoCardProps> = ({
  ae
}) => {
  const initials = ae.name.split(" ").map(n => n[0]).join("").toUpperCase();
  return <BlurFade delay={0.5} inView>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        {/* Trust Badge */}
        <div className="absolute right-4 top-4">
          
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <Avatar className="h-24 w-24 ring-4 ring-primary/10">
              <AvatarImage src={ae.photoUrl} alt={ae.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Info Section */}
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-foreground leading-tight">
                {ae.name}
              </h3>
              <p className="text-sm text-muted-foreground">{ae.title}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
              {ae.bio}
            </p>

            {/* Contact Actions */}
            <div className="flex flex-wrap gap-2">
              <Button variant="default" size="sm" className="gap-2" asChild>
                <a href={ae.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  Book a Call
                </a>
              </Button>

              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={`mailto:${ae.email}`}>
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>

              {ae.phone && <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={`tel:${ae.phone}`}>
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </Button>}

              {ae.linkedInUrl && <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <a href={ae.linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>}
            </div>
          </div>
        </div>
      </div>
    </BlurFade>;
};
export default AEInfoCard;