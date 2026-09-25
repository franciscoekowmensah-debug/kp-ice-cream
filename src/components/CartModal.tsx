import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, Send, Phone, MapPin, ShoppingBag, Clock, CheckCircle2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Generate WhatsApp Order Message for Walk-in Pickup
  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    const ownerPhone = '233556120005';
    
    let message = `*KIM PRINCE JUICE & SNACK BAR - NEW ORDER*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*ORDER ITEMS:*\n`;
    
    cart.forEach((c) => {
      const lineTotal = (c.item.price * c.quantity).toFixed(2);
      message += `• ${c.quantity}x ${c.item.name} — GHC ${lineTotal}\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL:* GHC ${totalAmount.toFixed(2)}\n`;
    message += `*SERVICE:* Walk-in Order Ahead\n`;

    if (customerName.trim()) {
      message += `*CUSTOMER NAME:* ${customerName.trim()}\n`;
    }

    if (notes.trim()) {
      message += `*ORDER NOTES:* ${notes.trim()}\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Sent from Kim Prince Juice & Snack Bar Web App`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-stone-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-lg text-stone-900 leading-tight">
                Your Order Ahead
              </h2>
              <span className="text-xs text-stone-500 font-medium">
                {totalItemsCount} item{totalItemsCount === 1 ? '' : 's'} in cart
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-xl transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 grow">
          {cart.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-stone-100 mx-auto flex items-center justify-center text-stone-400">
                <ShoppingBag className="w-7 h-7 text-stone-400" />
              </div>
              <h3 className="font-display font-bold text-stone-800 text-base">
                Your cart is currently empty
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Select your favorite juices, sandwiches, snacks, or sundaes from the menu to start your order ahead.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Itemized Cart List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-1">
                  <span>Selected Treats</span>
                  <button
                    onClick={onClearCart}
                    className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    Clear all
                  </button>
                </div>

                {cart.map((c) => (
                  <div
                    key={c.item.id}
                    className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100"
                  >
                    <img
                      src={c.item.image}
                      alt={c.item.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 bg-stone-200"
                      referrerPolicy="no-referrer"
                    />

                    <div className="grow min-w-0">
                      <h4 className="font-semibold text-stone-900 text-xs sm:text-sm truncate">
                        {c.item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-xs text-emerald-800 font-bold tabular-nums">
                          GHC {c.item.price.toFixed(2)}
                        </span>
                        <span className="text-[11px] text-stone-400">× {c.quantity}</span>
                      </div>
                    </div>

                    {/* Stepper & Remove */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(c.item.id, c.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 text-xs cursor-pointer font-bold"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-mono text-xs font-bold text-stone-900 tabular-nums">
                        {c.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(c.item.id, c.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 text-xs cursor-pointer font-bold"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(c.item.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer ml-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Walk-in Pickup Notice (No Delivery per user instruction) */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-emerald-950 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">Walk-in Pickup Order</span>
                    <span className="text-[10px] bg-emerald-200/70 text-emerald-900 font-semibold px-2 py-0.2 rounded-full">
                      Ready in 5–10 mins
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-800/90 mt-0.5 leading-snug">
                    Pick up freshly made at our stand: <strong>Adjacent Prison Quarters, Obuasi</strong>. Pay with MoMo or cash at the counter.
                  </p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-2.5 text-xs">
                <div>
                  <label className="text-stone-700 font-semibold block mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Kwaku Mensah"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-emerald-600 text-xs text-stone-900"
                  />
                </div>

                <div>
                  <label className="text-stone-700 font-semibold block mb-1">
                    Order Notes / Special Requests:
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="e.g. Extra cold juice, no ice in smoothie, toasted sandwich crispy, extra wafer..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-emerald-600 text-xs text-stone-900 resize-none"
                  />
                </div>
              </div>

              {/* Total Calculation */}
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 font-medium">Total Amount</span>
                  <p className="text-[11px] text-emerald-800">Pay on pickup at the counter</p>
                </div>
                <span className="font-mono font-extrabold text-xl text-stone-900 tabular-nums">
                  GHC {totalAmount.toFixed(2)}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer WhatsApp Redirect Button */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-white space-y-2.5">
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Order Ahead to WhatsApp (0556120005)</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500">
              <a
                href="tel:+233556120005"
                className="hover:text-emerald-700 flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-emerald-600" />
                <span>Call: 0556120005</span>
              </a>
              <span>·</span>
              <span>Pickup: Adjacent Prison Qtrs</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
