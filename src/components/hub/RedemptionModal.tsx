import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { X, Package, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SwagItem } from "./SwagCard";
import { toast } from "sonner";

interface RedemptionModalProps {
  item: SwagItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (item: SwagItem, formData: ShippingFormData) => void;
  userPoints: number;
}

export interface ShippingFormData {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  size?: string;
}

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "Other",
];

const RedemptionModal: React.FC<RedemptionModalProps> = ({
  item,
  isOpen,
  onClose,
  onConfirm,
  userPoints,
}) => {
  const [step, setStep] = useState<"form" | "confirming" | "success">("form");
  const [formData, setFormData] = useState<ShippingFormData>({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    size: item?.sizes?.[1] || undefined,
  });

  const handleInputChange = (field: keyof ShippingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.address1.trim()) {
      toast.error("Please enter your address");
      return false;
    }
    if (!formData.city.trim()) {
      toast.error("Please enter your city");
      return false;
    }
    if (!formData.state.trim()) {
      toast.error("Please enter your state/province");
      return false;
    }
    if (!formData.zip.trim()) {
      toast.error("Please enter your ZIP/postal code");
      return false;
    }
    if (item?.sizes && !formData.size) {
      toast.error("Please select a size");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item || !validateForm()) return;

    setStep("confirming");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStep("success");
    onConfirm(item, formData);
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      size: undefined,
    });
    onClose();
  };

  if (!isOpen || !item) return null;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-border bg-[#F7F4ED] dark:bg-muted/30">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{item.name}</h3>
                  <p className="text-primary text-sm font-medium mt-1">
                    {item.pointsCost} points
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {step === "form" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="address1">Address Line 1</Label>
                    <Input
                      id="address1"
                      value={formData.address1}
                      onChange={(e) => handleInputChange("address1", e.target.value)}
                      placeholder="123 Main St"
                      className="mt-1"
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                    <Input
                      id="address2"
                      value={formData.address2}
                      onChange={(e) => handleInputChange("address2", e.target.value)}
                      placeholder="Apt 4B"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="San Francisco"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="CA"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zip">ZIP/Postal Code</Label>
                    <Input
                      id="zip"
                      value={formData.zip}
                      onChange={(e) => handleInputChange("zip", e.target.value)}
                      placeholder="94102"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => handleInputChange("country", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {item.sizes && (
                    <div className="col-span-2">
                      <Label htmlFor="size">Size</Label>
                      <Select
                        value={formData.size}
                        onValueChange={(value) => handleInputChange("size", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {item.sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                {/* Points Summary */}
                <div className="p-4 bg-muted/30 rounded-xl mt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Current Balance</span>
                    <span className="font-medium text-foreground">{userPoints} pts</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-muted-foreground">Item Cost</span>
                    <span className="font-medium text-primary">-{item.pointsCost} pts</span>
                  </div>
                  <div className="border-t border-border mt-2 pt-2 flex justify-between items-center">
                    <span className="font-medium text-foreground">After Redemption</span>
                    <span className="font-semibold text-foreground">{userPoints - item.pointsCost} pts</span>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6">
                  Confirm Redemption
                </Button>
              </form>
            )}

            {step === "confirming" && (
              <div className="py-12 text-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Processing your order...</p>
                <p className="text-sm text-muted-foreground mt-2">This will just take a moment</p>
              </div>
            )}

            {step === "success" && (
              <div className="py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <h3 className="text-xl font-medium text-foreground mb-2">Order Confirmed!</h3>
                <p className="text-muted-foreground mb-6">
                  Your {item.name} is on its way. Expect delivery in 5-7 business days.
                </p>
                <Button onClick={handleClose} variant="outline">
                  Continue Browsing
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default RedemptionModal;
