import React from "react";
import { motion } from "framer-motion";
import { Lock, Package, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface SwagItem {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  image: string;
  available: boolean;
  category: "apparel" | "accessories" | "tech" | "limited";
  sizes?: string[];
  stock?: number;
}

interface SwagCardProps {
  item: SwagItem;
  userPoints: number;
  onRedeem: (item: SwagItem) => void;
  isRedeemed?: boolean;
}

const categoryColors = {
  apparel: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  accessories: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  tech: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  limited: "bg-amber-500/10 text-amber-600 border-amber-500/20",
};

const SwagCard: React.FC<SwagCardProps> = ({ 
  item, 
  userPoints, 
  onRedeem,
  isRedeemed = false 
}) => {
  const canAfford = userPoints >= item.pointsCost;
  const isAvailable = item.available && !isRedeemed;
  const canRedeem = canAfford && isAvailable;
  const pointsNeeded = Math.max(0, item.pointsCost - userPoints);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`relative bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
        !isAvailable ? "opacity-60" : "hover:shadow-lg hover:border-border/80"
      }`}
    >
      {/* Image Area */}
      <div className="aspect-square bg-[#F7F4ED] dark:bg-muted/30 relative overflow-hidden">
        {item.image && item.image !== "/placeholder.svg" ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-20 h-20 text-muted-foreground/30" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge 
            variant="outline" 
            className={`${categoryColors[item.category]} text-xs`}
          >
            {item.category}
          </Badge>
          {item.category === "limited" && item.stock && (
            <Badge variant="outline" className="bg-rose-500/10 text-rose-600 border-rose-500/20 text-xs">
              Only {item.stock} left
            </Badge>
          )}
        </div>

        {/* Points Badge */}
        <div className="absolute top-3 right-3">
          <div className="px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
            {item.pointsCost} pts
          </div>
        </div>

        {/* Lock Overlay */}
        {!canAfford && isAvailable && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">{pointsNeeded} more points</p>
            </div>
          </div>
        )}

        {/* Redeemed Overlay */}
        {isRedeemed && (
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-primary">Redeemed!</p>
            </div>
          </div>
        )}
      </div>

      {/* Content - flex-grow to push button to bottom */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-foreground mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>

        {/* Sizes if applicable - fixed height area */}
        <div className="min-h-[28px] mb-4">
          {item.sizes && item.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {item.sizes.map((size) => (
                <span 
                  key={size}
                  className="px-2 py-0.5 text-xs bg-muted/50 rounded text-muted-foreground"
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Button - always at bottom */}
        <div className="mt-auto">
          <Button 
            onClick={() => onRedeem(item)}
            disabled={!canRedeem}
            className="w-full"
            variant={canRedeem ? "default" : "outline"}
          >
            {isRedeemed 
              ? "Already Redeemed" 
              : !item.available 
                ? "Out of Stock" 
                : !canAfford 
                  ? `Need ${pointsNeeded} more pts`
                  : "Redeem Now"
            }
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SwagCard;
