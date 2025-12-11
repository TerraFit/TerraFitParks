import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TerraButton from "@/components/ui/TerraButton";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteDialog({ open, onOpenChange, packageName }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    timeline: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      company: "",
      timeline: "",
      message: ""
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isSubmitted ? "Request Received!" : `Request Quote - ${packageName}`}
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-[#559e2a]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-[#559e2a]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We've received your quote request and will get back to you within 24 hours with a detailed proposal.
            </p>
            <TerraButton onClick={handleClose}>
              Close
            </TerraButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@company.com"
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 123 456 789"
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="company">Company / Organization</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your organization name"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="timeline">Project Timeline *</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => setFormData({...formData, timeline: value})}
                required
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select your timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exploring">Exploring the options</SelectItem>
                  <SelectItem value="planning">Planning phase</SelectItem>
                  <SelectItem value="3-6">3 to 6 months</SelectItem>
                  <SelectItem value="6-12">6 to 12 months</SelectItem>
                  <SelectItem value="12+">12+ months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Tell us about your project</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your vision, location details, and any specific requirements..."
                rows={4}
                className="mt-1.5"
              />
            </div>

            <TerraButton type="submit" fullWidth size="lg" className="group">
              <Send className="w-4 h-4 mr-2" />
              Submit Quote Request
            </TerraButton>

            <p className="text-gray-500 text-xs text-center">
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}