
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample transaction data
const transactionData = [
  {
    id: "tx1",
    date: "2025-04-05",
    name: "Amazon",
    type: "payment",
    status: "completed",
    amount: -42.99,
    currency: "USD",
    icon: "AZ",
  },
  {
    id: "tx2",
    date: "2025-04-03",
    name: "John Doe",
    type: "money_received",
    status: "completed",
    amount: 126.50,
    currency: "USD",
    icon: "JD",
  },
  {
    id: "tx3",
    date: "2025-04-02",
    name: "Starbucks",
    type: "payment",
    status: "completed",
    amount: -5.75,
    currency: "USD",
    icon: "SB",
  },
  {
    id: "tx4",
    date: "2025-04-01",
    name: "Maria Garcia",
    type: "money_sent",
    status: "completed",
    amount: -50.00,
    currency: "USD",
    icon: "MG",
  },
  {
    id: "tx5",
    date: "2025-03-28",
    name: "Spotify",
    type: "subscription",
    status: "completed",
    amount: -9.99,
    currency: "USD",
    icon: "SP",
  },
  {
    id: "tx6",
    date: "2025-03-25",
    name: "Freelance Work",
    type: "money_received",
    status: "completed",
    amount: 350.00,
    currency: "USD",
    icon: "FW",
  },
];

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Filter transactions based on search query and filter type
  const filteredTransactions = transactionData.filter(transaction => {
    const matchesSearch = transaction.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'incoming' && transaction.amount > 0) || 
      (filter === 'outgoing' && transaction.amount < 0);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Transactions</h1>
            <p className="text-gray-600 mb-8">View and manage your transaction history.</p>
            
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View all your past transactions.</CardDescription>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <Input 
                    placeholder="Search transactions..." 
                    className="md:max-w-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="md:max-w-xs">
                      <SelectValue placeholder="Filter transactions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Transactions</SelectItem>
                      <SelectItem value="incoming">Money Received</SelectItem>
                      <SelectItem value="outgoing">Money Sent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="payments">Payments</TabsTrigger>
                    <TabsTrigger value="received">Received</TabsTrigger>
                    <TabsTrigger value="sent">Sent</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <div className="space-y-1">
                      {filteredTransactions.length > 0 ? (
                        filteredTransactions.map(transaction => (
                          <div 
                            key={transaction.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                                <span className="text-xs font-medium">{transaction.icon}</span>
                              </div>
                              <div>
                                <p className="font-medium">{transaction.name}</p>
                                <p className="text-xs text-gray-500">
                                  {new Date(transaction.date).toLocaleDateString('en-US', {
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <span className={`font-medium ${transaction.amount > 0 ? 'text-success' : 'text-gray-800'}`}>
                              {transaction.amount > 0 ? '+' : ''}
                              {transaction.currency} {transaction.amount.toFixed(2)}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">No transactions found.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="payments">
                    <div className="space-y-1">
                      {filteredTransactions
                        .filter(tx => tx.type === 'payment' || tx.type === 'subscription')
                        .map(transaction => (
                          <div 
                            key={transaction.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                                <span className="text-xs font-medium">{transaction.icon}</span>
                              </div>
                              <div>
                                <p className="font-medium">{transaction.name}</p>
                                <p className="text-xs text-gray-500">
                                  {new Date(transaction.date).toLocaleDateString('en-US', {
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <span className={`font-medium ${transaction.amount > 0 ? 'text-success' : 'text-gray-800'}`}>
                              {transaction.amount > 0 ? '+' : ''}
                              {transaction.currency} {transaction.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="received">
                    <div className="space-y-1">
                      {filteredTransactions
                        .filter(tx => tx.type === 'money_received')
                        .map(transaction => (
                          <div 
                            key={transaction.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                                <span className="text-xs font-medium">{transaction.icon}</span>
                              </div>
                              <div>
                                <p className="font-medium">{transaction.name}</p>
                                <p className="text-xs text-gray-500">
                                  {new Date(transaction.date).toLocaleDateString('en-US', {
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <span className={`font-medium ${transaction.amount > 0 ? 'text-success' : 'text-gray-800'}`}>
                              {transaction.amount > 0 ? '+' : ''}
                              {transaction.currency} {transaction.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sent">
                    <div className="space-y-1">
                      {filteredTransactions
                        .filter(tx => tx.type === 'money_sent')
                        .map(transaction => (
                          <div 
                            key={transaction.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                                <span className="text-xs font-medium">{transaction.icon}</span>
                              </div>
                              <div>
                                <p className="font-medium">{transaction.name}</p>
                                <p className="text-xs text-gray-500">
                                  {new Date(transaction.date).toLocaleDateString('en-US', {
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <span className={`font-medium ${transaction.amount > 0 ? 'text-success' : 'text-gray-800'}`}>
                              {transaction.amount > 0 ? '+' : ''}
                              {transaction.currency} {transaction.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
