import React, { useState, useMemo } from "react";
import HubLayout from "@/components/hub/HubLayout";
import SwagCard, { SwagItem } from "@/components/hub/SwagCard";
import PointsBalance from "@/components/hub/PointsBalance";
import RedemptionModal, { ShippingFormData } from "@/components/hub/RedemptionModal";
import { BlurFade } from "@/components/ui/blur-fade";
import { useCustomer } from "@/contexts/CustomerContext";
import { useRewards } from "@/contexts/RewardsContext";
import { toast } from "sonner";
import { Gift } from "lucide-react";

// Import swag images
import stickersImage from "@/assets/swag/stickers.png";
import capImage from "@/assets/swag/cap.png";
import bottleImage from "@/assets/swag/bottle.png";
import notebookImage from "@/assets/swag/notebook.png";
import mugImage from "@/assets/swag/mug.png";
import tshirtImage from "@/assets/swag/tshirt.png";
import usbHubImage from "@/assets/swag/usb-hub.png";
import hoodieImage from "@/assets/swag/hoodie.png";

// Enhanced swag catalog with categories
const swagItems: SwagItem[] = [
  {
    id: "stickers",
    name: "Sticker Pack",
    description: "Set of 5 high-quality holographic vinyl stickers featuring Lovable branding",
    pointsCost: 25,
    image: stickersImage,
    available: true,
    category: "accessories",
  },
  {
    id: "notebook",
    name: "Developer Notebook",
    description: "Premium hardcover notebook with dot grid pages, perfect for sketching ideas",
    pointsCost: 50,
    image: notebookImage,
    available: true,
    category: "accessories",
  },
  {
    id: "mug",
    name: "Ceramic Mug",
    description: "Elegant ceramic mug with gradient design. Microwave and dishwasher safe",
    pointsCost: 75,
    image: mugImage,
    available: true,
    category: "accessories",
  },
  {
    id: "tshirt",
    name: "Lovable T-Shirt",
    description: "Premium 100% organic cotton t-shirt with subtle Lovable embroidery",
    pointsCost: 100,
    image: tshirtImage,
    available: true,
    category: "apparel",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "bottle",
    name: "Insulated Bottle",
    description: "Stainless steel insulated bottle. Keeps drinks cold 24h or hot 12h",
    pointsCost: 125,
    image: bottleImage,
    available: true,
    category: "tech",
  },
  {
    id: "cap",
    name: "Developer Cap",
    description: "Classic baseball cap with embroidered Lovable logo. Adjustable strap",
    pointsCost: 75,
    image: capImage,
    available: true,
    category: "apparel",
  },
  {
    id: "usb-hub",
    name: "USB-C Hub",
    description: "4-port USB-C hub with Lovable branding. Essential for any developer setup",
    pointsCost: 150,
    image: usbHubImage,
    available: true,
    category: "tech",
  },
  {
    id: "hoodie",
    name: "Premium Hoodie",
    description: "Cozy premium hoodie with embroidered logo. Limited edition colorway",
    pointsCost: 200,
    image: hoodieImage,
    available: true,
    category: "limited",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 47,
  },
];

const categories = [
  { id: "all", label: "All Items" },
  { id: "accessories", label: "Accessories" },
  { id: "apparel", label: "Apparel" },
  { id: "tech", label: "Tech" },
  { id: "limited", label: "Limited Edition" },
];

const SwagRedemption: React.FC = () => {
  const { profile } = useCustomer();
  const { points, removePoints, redeemUnlock, unlocks } = useRewards();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<SwagItem | null>(null);
  const [redeemedItems, setRedeemedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem("customer-hub-redeemed-swag");
    return saved ? JSON.parse(saved) : [];
  });

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return swagItems;
    return swagItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Find next affordable item for the progress hint
  const nextAffordableItem = useMemo(() => {
    const sortedByPrice = [...swagItems]
      .filter((item) => item.pointsCost > points && item.available && !redeemedItems.includes(item.id))
      .sort((a, b) => a.pointsCost - b.pointsCost);
    return sortedByPrice[0];
  }, [points, redeemedItems]);

  const handleRedeem = (item: SwagItem) => {
    setSelectedItem(item);
  };

  const handleConfirmRedemption = (item: SwagItem, formData: ShippingFormData) => {
    // Deduct points
    removePoints(item.pointsCost);
    
    // Track redeemed item
    const newRedeemed = [...redeemedItems, item.id];
    setRedeemedItems(newRedeemed);
    localStorage.setItem("customer-hub-redeemed-swag", JSON.stringify(newRedeemed));
    
    // Mark as redeemed in rewards context
    redeemUnlock(item.id);
    
    toast.success("Order confirmed!", {
      description: `Your ${item.name} will arrive in 5-7 business days.`,
    });
    
    setSelectedItem(null);
  };

  return (
    <HubLayout sectionId="swag" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-12">
          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Claim Your Rewards
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                Thanks for exploring your Customer Hub, {profile.contactName}. 
                Redeem your earned points for exclusive Lovable merchandise.
              </p>
            </div>
          </BlurFade>

          {/* Points Balance */}
          <BlurFade delay={0.1}>
            <PointsBalance 
              nextItemCost={nextAffordableItem?.pointsCost}
              nextItemName={nextAffordableItem?.name}
            />
          </BlurFade>

          {/* Premium Quality Callout */}
          <BlurFade delay={0.15}>
            <div className="p-4 bg-[#D4E0F9]/30 dark:bg-primary/10 rounded-2xl border border-[#4A7AE8]/20 dark:border-primary/20 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4E0F9] dark:bg-primary/20 flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4 text-[#4A7AE8] dark:text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground">
                  <strong>Premium Quality:</strong> Just like our product, our swag is built to last. 
                  Every item is sourced from sustainable materials and designed with care.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Exclusive to enterprise prospects. Free shipping worldwide.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Category Filters */}
          <BlurFade delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border text-foreground hover:bg-[#ECEAE4] dark:hover:bg-muted"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </BlurFade>

          {/* Swag Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <BlurFade key={item.id} delay={0.2 + index * 0.05}>
                <SwagCard
                  item={item}
                  userPoints={points}
                  onRedeem={handleRedeem}
                  isRedeemed={redeemedItems.includes(item.id)}
                />
              </BlurFade>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Gift className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground">No items in this category</p>
              <p className="text-muted-foreground">Try selecting a different category above.</p>
            </div>
          )}

          {/* CTA Section */}
          <BlurFade delay={0.4}>
            <div className="p-8 bg-primary text-primary-foreground rounded-3xl text-center">
              <h3 className="text-2xl font-medium mb-3">
                Need More Points?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Complete action items, explore hub sections, and engage with our content to earn more points.
              </p>
              <a 
                href="/actions" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                View Action Items
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Redemption Modal */}
      <RedemptionModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        onConfirm={handleConfirmRedemption}
        userPoints={points}
      />
    </HubLayout>
  );
};

export default SwagRedemption;
