
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight } from 'lucide-react';

const RequestMoney = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email && amount) {
        toast.success(`Request for $${amount} sent to ${email}!`);
        setEmail('');
        setAmount('');
        setNote('');
      } else {
        toast.error("Please fill in all required fields");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Request Money</h1>
            <p className="text-gray-600 mb-8">Request money from anyone with an email address.</p>
            
            <Card>
              <CardHeader>
                <CardTitle>Create a money request</CardTitle>
                <CardDescription>Fill in the details to request payment.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="amount">Amount</Label>
                        <Input 
                          id="amount" 
                          type="number" 
                          placeholder="0.00" 
                          min="0.01" 
                          step="0.01"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD - US Dollar</SelectItem>
                            <SelectItem value="EUR">EUR - Euro</SelectItem>
                            <SelectItem value="GBP">GBP - British Pound</SelectItem>
                            <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="note">Note (Optional)</Label>
                      <Input 
                        id="note" 
                        placeholder="What's this for?" 
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="dueDate">Due Date (Optional)</Label>
                      <Input 
                        id="dueDate" 
                        type="date" 
                      />
                      <p className="text-sm text-gray-500">Leave empty for no due date.</p>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => window.history.back()}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={isLoading || !email || !amount} 
                  className="bg-primary hover:bg-primary-dark"
                >
                  {isLoading ? "Processing..." : "Request Money"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestMoney;
