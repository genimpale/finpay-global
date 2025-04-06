
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ArrowRight } from 'lucide-react';

const SendMoney = () => {
  const [recipient, setRecipient] = useState('');
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
      if (recipient && amount) {
        toast.success(`$${amount} sent successfully to ${recipient}!`);
        setRecipient('');
        setAmount('');
        setNote('');
      } else {
        toast.error("Please fill in all required fields");
      }
    }, 1500);
  };

  const recentContacts = [
    { name: 'John Doe', email: 'john.doe@example.com', avatar: 'JD' },
    { name: 'Sarah Smith', email: 'sarah.smith@example.com', avatar: 'SS' },
    { name: 'Alex Johnson', email: 'alex.j@example.com', avatar: 'AJ' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Send Money</h1>
            <p className="text-gray-600 mb-8">Send money to anyone with an email address or mobile number.</p>
            
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <Card>
                  <CardHeader>
                    <CardTitle>Send money via email</CardTitle>
                    <CardDescription>Enter the recipient's email address to send money.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="recipient">Recipient's Email</Label>
                          <Input 
                            id="recipient" 
                            type="email" 
                            placeholder="email@example.com" 
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
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
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => window.history.back()}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      disabled={isLoading || !recipient || !amount} 
                      className="bg-primary hover:bg-primary-dark"
                    >
                      {isLoading ? "Processing..." : "Send Money"}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="mobile">
                <Card>
                  <CardHeader>
                    <CardTitle>Send money via mobile</CardTitle>
                    <CardDescription>Enter the recipient's mobile number to send money.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="phone">Recipient's Phone Number</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+1 (555) 123-4567" 
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="mobile-amount">Amount</Label>
                            <Input 
                              id="mobile-amount" 
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
                            <Label htmlFor="mobile-currency">Currency</Label>
                            <Select value={currency} onValueChange={setCurrency}>
                              <SelectTrigger id="mobile-currency">
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
                          <Label htmlFor="mobile-note">Note (Optional)</Label>
                          <Input 
                            id="mobile-note" 
                            placeholder="What's this for?" 
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          />
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
                      disabled={isLoading || !recipient || !amount}
                      className="bg-primary hover:bg-primary-dark"
                    >
                      {isLoading ? "Processing..." : "Send Money"}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="contacts">
                <Card>
                  <CardHeader>
                    <CardTitle>Send to recent contacts</CardTitle>
                    <CardDescription>Select from your recent contacts to send money quickly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentContacts.map((contact, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
                          onClick={() => setRecipient(contact.email)}
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                              {contact.avatar}
                            </div>
                            <div>
                              <p className="font-medium">{contact.name}</p>
                              <p className="text-gray-500 text-sm">{contact.email}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Select</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SendMoney;
