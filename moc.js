const ZALO_PHONE = "0378686196";
const ORDER_HISTORY_KEY = "moc-coffee-order-history";
const STORE = {
  name: "Mộc Coffee",
};

const menu = [
  { id: "cafe-nau", name: "Café nâu", category: "Cafe Mộc", price: 30000 },
  { id: "cafe-den", name: "Café đen", category: "Cafe Mộc", price: 30000 },
  { id: "bac-xiu", name: "Bạc xỉu", category: "Cafe Mộc", price: 35000 },
  { id: "cafe-muoi-nhe", name: "Café muối nhẹ", category: "Cafe Mộc", price: 45000 },
  { id: "cafe-cot-dua", name: "Cafe cốt dừa", category: "Cafe Mộc", price: 45000 },
  { id: "cacao", name: "Cacao", category: "Cafe Mộc", price: 45000 },
  { id: "matcha-latte", name: "Matcha Latte", category: "Cafe Mộc", price: 45000 },
  { id: "matcha-latte-xoai", name: "Matcha latte xoài", category: "Cafe Mộc", price: 55000 },
  { id: "xoai-dao-hong", name: "Xoài đào hồng", category: "Trà Mộc", price: 45000 },
  { id: "oolong-mo-dao", name: "Oolong mơ đào", category: "Trà Mộc", price: 45000 },
  { id: "oolong-nhai-sua", name: "Oolong nhài sữa", category: "Trà Mộc", price: 39000 },
  { id: "xanh-sua-gao-rang", name: "Xanh sữa gạo rang", category: "Trà Mộc", price: 39000 },
  { id: "tra-xoai-chanh-vang", name: "Trà xoài chanh vàng", category: "Trà Mộc", price: 45000 },
  { id: "tra-man-hau", name: "Trà mận hấu", category: "Trà Mộc", price: 49000 },
  { id: "tra-man-kem-cheese", name: "Trà mận kem cheese", category: "Trà Mộc", price: 49000 },
  { id: "xoai-nhai-kem-sua", name: "Xoài nhài kem sữa", category: "Trà Mộc", price: 49000 },
  { id: "vai-hong-chieu", name: "Vải hồng chiều", category: "Trà Mộc", price: 49000 },
  { id: "brew-mo-dao", name: "Brew mơ đào", category: "Mộc Brew", price: 49000 },
  { id: "brew-man", name: "Brew mận", category: "Mộc Brew", price: 49000 },
  { id: "brew-vai-hoa-hong", name: "Brew vải hoa hồng (wow)", category: "Mộc Brew", price: 49000 },
  { id: "cold-brew-nguyen-vi", name: "Cold brew nguyên vị", category: "Mộc Brew", price: 39000 },
  { id: "sua-chua-xoai", name: "Sữa chua xoài", category: "Sữa chua mát lành", price: 42000 },
  { id: "sua-chua-dua-gion", name: "Sữa chua dừa giòn", category: "Sữa chua mát lành", price: 42000 },
  { id: "sua-chua-vai-lac", name: "Sữa chua vải lắc", category: "Sữa chua mát lành", price: 45000 },
  { id: "sua-chua-cafe-kakao", name: "Sữa chua cafe/kakao", category: "Sữa chua mát lành", price: 39000 },
  { id: "chanh-tuoi", name: "Chanh tươi", category: "Quả tươi", price: 35000 },
  { id: "chanh-leo-tuoi", name: "Chanh leo tươi", category: "Quả tươi", price: 39000 },
  { id: "dua-hau", name: "Dưa hấu", category: "Quả tươi", price: 39000 },
  { id: "cam-tuoi", name: "Cam tươi", category: "Quả tươi", price: 45000 },
  { id: "sinh-to-xoai", name: "Sinh tố xoài", category: "Quả tươi", price: 45000 },
  { id: "bo-gia-dua-non", name: "Bơ già dừa non", category: "Quả tươi", price: 59000 },
  { id: "sinh-to-mang-cau", name: "Sinh tố mãng cầu", category: "Quả tươi", price: 59000 },
  { id: "tran-chau-thach-dua", name: "Trân châu giòn / thạch dừa", category: "Gọi thêm", price: 9000 },
  { id: "hat-no-yen-mach", name: "Hạt nổ yến mạch", category: "Gọi thêm", price: 9000 },
  { id: "hat-thuy-tinh-hong", name: "Hạt thủy tinh hồng", category: "Gọi thêm", price: 9000 },
  { id: "kem-man", name: "Kem mặn", category: "Gọi thêm", price: 15000 },
  { id: "cafe-them", name: "Cafe thêm", category: "Gọi thêm", price: 15000 },
];

const menuById = new Map(menu.map((item) => [item.id, item]));
const categories = ["Tất cả", ...new Set(menu.map((item) => item.category))];
const cart = new Map();
let activeCategory = "Tất cả";
let searchQuery = "";
let pendingItemId = null;

const menuGrid = document.querySelector("#menu-grid");
const categoryList = document.querySelector("#categories");
const searchInput = document.querySelector("#search-input");
const featuredTrack = document.querySelector("#featured-track");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const cartTax = document.querySelector("#cart-tax");
const cartGrandTotal = document.querySelector("#cart-grand-total");
const clearCartButton = document.querySelector("#clear-cart");
const addressField = document.querySelector("#address-field");
const addressInput = document.querySelector("#customer-address");
const pickupField = document.querySelector("#pickup-field");
const pickupLocation = document.querySelector("#pickup-location");
const cartDialog = document.querySelector("#cart-dialog");
const customizeDialog = document.querySelector("#customize-dialog");
const customizeForm = document.querySelector("#customize-form");
const toppingList = document.querySelector("#topping-list");
const customizePrice = document.querySelector("#customize-price");
const orderForm = document.querySelector("#order-form");
const formError = document.querySelector("#form-error");
const orderDialog = document.querySelector("#order-dialog");
const orderMessage = document.querySelector("#order-message");
const openZalo = document.querySelector("#open-zalo");
const copyStatus = document.querySelector("#copy-status");
const historyDialog = document.querySelector("#order-history-dialog");
const historyList = document.querySelector("#history-list");
const historyNotice = document.querySelector("#history-notice");
const historyDialogCount = document.querySelector("#history-dialog-count");
const historySaveStatus = document.querySelector("#history-save-status");

let orderHistory = [];
let historyStorageMessage = "";

const formatPrice = (amount) =>
  `${new Intl.NumberFormat("vi-VN").format(amount)}₫`;

function getCartTotals() {
  const subtotal = [...cart.values()].reduce(
    (sum, variant) => sum + getVariantPrice(variant) * variant.quantity,
    0,
  );
  const tax = Math.round(subtotal * 0.08);
  return { subtotal, tax, total: subtotal + tax };
}

function variantKey(itemId, sugar, ice, toppings) {
  return `${itemId}|${sugar || ""}|${ice || ""}|${toppings.join(",")}`;
}

function getVariantPrice(variant) {
  const item = menuById.get(variant.itemId);
  return item.price + variant.toppings.reduce(
    (sum, id) => sum + menuById.get(id).price,
    0,
  );
}

function renderToppings() {
  toppingList.innerHTML = menu
    .filter((item) => item.category === "Gọi thêm")
    .map(
      (item) => `
        <label class="topping-option">
          <input type="checkbox" name="topping" value="${item.id}" />
          <span>${item.name}</span>
          <strong>+${formatPrice(item.price)}</strong>
        </label>`,
    )
    .join("");
}

function updateCustomizePrice() {
  const item = menuById.get(pendingItemId);
  if (!item) return;
  const selectedToppings = [...customizeForm.querySelectorAll('input[name="topping"]:checked')];
  const extras = selectedToppings.reduce((sum, input) => {
    return sum + menuById.get(input.value).price;
  }, 0);
  customizePrice.textContent = `Giá món: ${formatPrice(item.price + extras)}`;
}

function addVariant(variant) {
  const key = variantKey(variant.itemId, variant.sugar, variant.ice, variant.toppings);
  const existing = cart.get(key);
  if (existing) existing.quantity += 1;
  else cart.set(key, { ...variant, quantity: 1 });
  renderCart();
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      (category) => `
        <button class="category-button${category === activeCategory ? " active" : ""}"
          type="button" aria-pressed="${category === activeCategory}"
          data-category="${category}">${category}</button>`,
    )
    .join("");
}

function renderMenu() {
  const query = searchQuery.trim().toLocaleLowerCase("vi");
  const filtered = menu.filter((item) => {
    const matchesCategory =
      activeCategory === "Tất cả" || item.category === activeCategory;
    const matchesSearch =
      !query ||
      `${item.name} ${item.category}`.toLocaleLowerCase("vi").includes(query);
    return matchesCategory && matchesSearch;
  });

  document.querySelector("#empty-menu").hidden = filtered.length !== 0;
  menuGrid.innerHTML = filtered
    .map(
      (      item) => `
        <article class="food-card">
          <div class="food-image" aria-hidden="true"></div>
          <div class="food-details">
            <span class="food-category">${item.category}</span>
            <div class="food-topline">
              <h3 class="food-name">${item.name}</h3>
            </div>
            <div class="food-bottom">
              <span class="food-price">${formatPrice(item.price)}</span>
              <button class="add-button" type="button" data-add="${item.id}" aria-label="Thêm ${item.name} vào giỏ">
                <span aria-hidden="true">+</span> Thêm món
              </button>
            </div>
          </div>
        </article>`,
    )
    .join("");
}

function renderCart() {
  const entries = [...cart.entries()];
  const itemCount = entries.reduce((sum, [, variant]) => sum + variant.quantity, 0);
  const { subtotal, tax, total } = getCartTotals();

  cartCount.textContent = itemCount;
  cartTotal.textContent = formatPrice(subtotal);
  cartTax.textContent = formatPrice(tax);
  cartGrandTotal.textContent = formatPrice(total);
  document.querySelector("#launcher-count").textContent = itemCount;
  document.querySelector("#launcher-total").textContent = formatPrice(total);
  document.querySelector("#cart-launcher").setAttribute(
    "aria-label",
    `Mở giỏ hàng, ${itemCount} món, tổng cộng ${formatPrice(total)}`,
  );
  clearCartButton.hidden = entries.length === 0;
  cartItems.innerHTML = entries.length
    ? entries
        .map(([key, variant]) => {
          const item = menuById.get(variant.itemId);
          const details = [
            variant.sugar && `Đường ${variant.sugar}`,
            variant.ice && variant.ice,
            ...variant.toppings.map((id) => menuById.get(id).name),
          ].filter(Boolean).join(" · ");
          const unitPrice = getVariantPrice(variant);
          return `
            <div class="cart-row">
              <div class="cart-row-main">
                <span class="cart-row-name">${item.name}</span>
                <span class="cart-row-price">${formatPrice(unitPrice * variant.quantity)}</span>
              </div>
              ${details ? `<span class="cart-row-options">${details}</span>` : ""}
              <div class="quantity-control" aria-label="Số lượng ${item.name}">
                <button type="button" data-change="${key}" data-delta="-1" aria-label="Bớt một ${item.name}">−</button>
                <span>${variant.quantity}</span>
                <button type="button" data-change="${key}" data-delta="1" aria-label="Thêm một ${item.name}">+</button>
              </div>
            </div>`;
        })
        .join("")
    : `<div class="cart-empty">
         <span class="empty-bowl" aria-hidden="true">☕</span>
         <strong>Giỏ hàng đang trống</strong>
         <span>Chọn thức uống trong menu để bắt đầu nha.</span>
       </div>`;
}

function isOrderHistoryEntry(entry) {
  return entry &&
    typeof entry.id === "string" &&
    typeof entry.createdAt === "string" &&
    Number.isFinite(Date.parse(entry.createdAt)) &&
    Array.isArray(entry.items) &&
    entry.items.every((item) =>
      typeof item.name === "string" &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      Array.isArray(item.options) &&
      item.options.every((option) => typeof option === "string") &&
      Number.isFinite(item.total),
    ) &&
    entry.items.length > 0 &&
    ["subtotal", "tax", "total"].every((key) =>
      Number.isFinite(entry.totals?.[key]),
    ) &&
    typeof entry.deliveryMethod === "string";
}

function loadOrderHistory() {
  try {
    const savedHistory = localStorage.getItem(ORDER_HISTORY_KEY);
    if (savedHistory === null) return;

    const parsedHistory = JSON.parse(savedHistory);
    if (!Array.isArray(parsedHistory)) {
      historyStorageMessage = "Không thể đọc lịch sử đơn đã lưu trên thiết bị này.";
      return;
    }

    orderHistory = parsedHistory.filter(isOrderHistoryEntry);
    if (orderHistory.length !== parsedHistory.length) {
      historyStorageMessage = "Một số mục lịch sử không hợp lệ nên không thể hiển thị.";
    }
  } catch {
    historyStorageMessage = "Không thể đọc lịch sử đơn đã lưu trên thiết bị này.";
  }
}

function renderOrderHistory() {
  const count = orderHistory.length;
  document.querySelector("#topbar-history-count").textContent = count;
  document.querySelector("#sidebar-history-count").textContent = count;
  historyDialogCount.textContent = count;
  document.querySelectorAll("[data-open-history]").forEach((button) => {
    button.setAttribute("aria-label", `Lịch sử đơn, ${count} đơn`);
  });
  historyList.replaceChildren();
  historyNotice.textContent = historyStorageMessage;
  historyNotice.hidden = !historyStorageMessage;

  if (count === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "history-empty";
    emptyState.textContent = "Bạn chưa có đơn nào được tạo trên thiết bị này.";
    historyList.append(emptyState);
    return;
  }

  for (const [index, entry] of orderHistory.entries()) {
    const card = document.createElement("article");
    card.className = "history-order";

    const detailsId = `history-details-${index}`;
    const toggle = document.createElement("button");
    toggle.className = "history-order-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", detailsId);
    toggle.setAttribute("aria-label", "Mở chi tiết đơn hàng");
    const header = document.createElement("span");
    header.className = "history-order-header";
    const date = document.createElement("time");
    date.dateTime = entry.createdAt;
    date.textContent = new Intl.DateTimeFormat("vi-VN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(entry.createdAt));
    const status = document.createElement("span");
    status.className = "history-order-status";
    status.textContent = "Đã soạn đơn";
    header.append(date, status);
    const summaryTotal = document.createElement("span");
    summaryTotal.className = "history-order-summary-total";
    summaryTotal.textContent = formatPrice(entry.totals.total);
    const chevron = document.createElement("span");
    chevron.className = "history-order-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "⌄";
    toggle.append(header, summaryTotal, chevron);
    card.append(toggle);

    const details = document.createElement("div");
    details.className = "history-order-details";
    details.id = detailsId;
    details.hidden = true;
    const items = document.createElement("ul");
    items.className = "history-items";
    for (const item of entry.items) {
      const row = document.createElement("li");
      const name = document.createElement("span");
      name.className = "history-item-name";
      name.textContent = `${item.name} ×${item.quantity}`;
      const price = document.createElement("strong");
      price.textContent = formatPrice(item.total);
      row.append(name, price);
      if (item.options.length > 0) {
        const options = document.createElement("small");
        options.className = "history-item-options";
        options.textContent = item.options.join(" · ");
        row.append(options);
      }
      items.append(row);
    }
    details.append(items);

    const delivery = document.createElement("p");
    delivery.className = "history-delivery";
    delivery.textContent = entry.deliveryMethod;
    details.append(delivery);

    const totals = document.createElement("div");
    totals.className = "history-totals";
    for (const [label, value, isGrandTotal] of [
      ["Tạm tính", entry.totals.subtotal, false],
      ["Thuế VAT (8%)", entry.totals.tax, false],
      ["Tổng thanh toán", entry.totals.total, true],
    ]) {
      const line = document.createElement("div");
      if (isGrandTotal) line.className = "history-grand-total";
      const lineLabel = document.createElement("span");
      lineLabel.textContent = label;
      const lineAmount = document.createElement("strong");
      lineAmount.textContent = formatPrice(value);
      line.append(lineLabel, lineAmount);
      totals.append(line);
    }
    details.append(totals);
    card.append(details);
    historyList.append(card);
  }
}

historyList.addEventListener("click", (event) => {
  const toggle = event.target.closest(".history-order-toggle");
  if (!toggle) return;
  const expanded = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute(
    "aria-label",
    expanded ? "Thu gọn chi tiết đơn hàng" : "Mở chi tiết đơn hàng",
  );
  document.getElementById(toggle.getAttribute("aria-controls")).hidden = !expanded;
});

function saveOrderToHistory(formData) {
  const totals = getCartTotals();
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    items: [...cart.values()].map((variant) => {
      const item = menuById.get(variant.itemId);
      const options = [
        variant.sugar && `Đường ${variant.sugar}`,
        variant.ice,
        ...variant.toppings.map((id) => menuById.get(id).name),
      ].filter(Boolean);
      return {
        name: item.name,
        quantity: variant.quantity,
        options,
        total: getVariantPrice(variant) * variant.quantity,
      };
    }),
    totals,
    deliveryMethod: formData.get("delivery") === "delivery"
      ? "Giao tận nơi"
      : "Đến lấy tại cửa hàng",
  };

  orderHistory.unshift(entry);
  historyStorageMessage = "";
  try {
    localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orderHistory));
    historySaveStatus.textContent = "";
  } catch {
    historyStorageMessage = "Không lưu được lịch sử trên thiết bị này; đơn vẫn đã được soạn.";
    historySaveStatus.textContent = historyStorageMessage;
  }
  renderOrderHistory();
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const item = menuById.get(button.dataset.add);
  if (item.category === "Gọi thêm") {
    addVariant({ itemId: item.id, sugar: "", ice: "", toppings: [] });
    return;
  }
  pendingItemId = item.id;
  customizeForm.reset();
  document.querySelector("#customize-item-name").textContent = item.name;
  toppingList.querySelectorAll('input[name="topping"]').forEach((input) => { input.checked = false; });
  updateCustomizePrice();
  customizeDialog.showModal();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-change]");
  if (!button) return;
  const key = button.dataset.change;
  const variant = cart.get(key);
  variant.quantity += Number(button.dataset.delta);
  if (variant.quantity <= 0) cart.delete(key);
  renderCart();
});

customizeForm.addEventListener("change", updateCustomizePrice);
customizeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(customizeForm);
  addVariant({
    itemId: pendingItemId,
    sugar: formData.get("sugar"),
    ice: formData.get("ice"),
    toppings: formData.getAll("topping"),
  });
  customizeDialog.close();
});

document.querySelector("#close-customize").addEventListener("click", () => customizeDialog.close());
customizeDialog.addEventListener("click", (event) => {
  if (event.target === customizeDialog) customizeDialog.close();
});

clearCartButton.addEventListener("click", () => {
  cart.clear();
  renderCart();
});

document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!cartDialog.open) {
      cartDialog.showModal();
    }
  });
});

document.querySelector("#close-cart").addEventListener("click", () => {
  cartDialog.close();
});

document.querySelectorAll("[data-open-history]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!historyDialog.open) {
      renderOrderHistory();
      historyDialog.showModal();
    }
  });
});

document.querySelector("#close-history").addEventListener("click", () => {
  historyDialog.close();
});

historyDialog.addEventListener("click", (event) => {
  if (event.target === historyDialog) historyDialog.close();
});

cartDialog.addEventListener("click", (event) => {
  if (event.target === cartDialog) cartDialog.close();
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  renderMenu();
});

function goToFeaturedSlide(index) {
  const slides = [...featuredTrack.children];
  const boundedIndex = (index + slides.length) % slides.length;
  featuredTrack.scrollTo({
    left: boundedIndex * featuredTrack.clientWidth,
    behavior: "smooth",
  });
}

featuredTrack.addEventListener("scroll", () => {
  const currentIndex = Math.round(featuredTrack.scrollLeft / featuredTrack.clientWidth);
  document.querySelectorAll("[data-featured-slide]").forEach((button, index) => {
    const active = index === currentIndex;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
}, { passive: true });

document.querySelector(".featured-controls").addEventListener("click", (event) => {
  const button = event.target.closest("[data-featured-slide]");
  if (!button) return;
  goToFeaturedSlide(Number(button.dataset.featuredSlide));
});

featuredTrack.addEventListener("click", (event) => {
  const button = event.target.closest("[data-featured-search]");
  if (!button) return;
  activeCategory = "Tất cả";
  searchInput.value = button.dataset.featuredSearch;
  searchQuery = searchInput.value;
  renderCategories();
  renderMenu();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

document.querySelectorAll('input[name="delivery"]').forEach((input) => {
  input.addEventListener("change", () => {
    if (!input.checked) return;
    const isPickup = input.value === "pickup";
    document
      .querySelectorAll(".delivery-option")
      .forEach((option) => option.classList.toggle("selected", option.contains(input)));
    addressField.hidden = isPickup;
    addressInput.required = !isPickup;
    addressInput.disabled = isPickup;
    pickupField.hidden = !isPickup;
    pickupLocation.required = isPickup;
    pickupLocation.disabled = !isPickup;
  });
});

function buildOrderMessage(formData) {
  const totals = getCartTotals();
  const lines = [
    `Xin chào ${STORE.name}, mình muốn đặt món:`,
    "",
    ...[...cart.values()].map((variant) => {
      const item = menuById.get(variant.itemId);
      const details = [
        variant.sugar && `đường ${variant.sugar}`,
        variant.ice && variant.ice.toLowerCase(),
        ...variant.toppings.map((id) => menuById.get(id).name),
      ].filter(Boolean);
      return `• ${item.name} x${variant.quantity}${details.length ? ` (${details.join(", ")})` : ""} — ${formatPrice(getVariantPrice(variant) * variant.quantity)}`;
    }),
    "",
    `Tạm tính: ${formatPrice(totals.subtotal)}`,
    `Thuế VAT (8%): ${formatPrice(totals.tax)}`,
    `Tổng thanh toán: ${formatPrice(totals.total)}`,
    `Hình thức: ${formData.get("delivery") === "delivery" ? "Giao tận nơi" : "Đến lấy tại cửa hàng"}`,
    `Người nhận: ${formData.get("name")}`,
    `Số điện thoại: ${formData.get("phone")}`,
  ];

  if (formData.get("delivery") === "delivery") {
    lines.push(`Địa chỉ giao hàng: ${formData.get("address")}`);
  } else {
    lines.push(`Cửa hàng: ${formData.get("pickupLocation")}`);
  }

  const note = formData.get("note").trim();
  if (note) lines.push(`Lời nhắn: ${note}`);
  lines.push("", "Nhờ Mộc xác nhận giúp mình nhé!");
  return lines.join("\n");
}

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formError.hidden = true;
  formError.textContent = "";

  if (cart.size === 0) {
    formError.textContent = "Bạn chọn ít nhất một món trong menu trước nhé.";
    formError.hidden = false;
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!orderForm.reportValidity()) return;

  const phone = orderForm.elements.phone.value.replace(/[\s().+-]/g, "");
  if (!/^0\d{9}$/.test(phone)) {
    formError.textContent = "Số điện thoại cần có 10 chữ số và bắt đầu bằng số 0.";
    formError.hidden = false;
    orderForm.elements.phone.focus();
    return;
  }

  const formData = new FormData(orderForm);
  orderMessage.value = buildOrderMessage(formData);
  saveOrderToHistory(formData);
  openZalo.href = `https://zalo.me/${ZALO_PHONE}`;
  const zaloWindow = window.open("about:blank", "_blank");
  if (zaloWindow) zaloWindow.opener = null;
  orderDialog.showModal();
  const copied = await copyOrderToClipboard();
  if (zaloWindow) {
    zaloWindow.location.href = openZalo.href;
  } else {
    copyStatus.textContent = copied
      ? "Đã sao chép đơn. Zalo chưa tự mở — bấm “Nhắn Mộc trên Zalo”, rồi dán tin nhắn."
      : "Zalo chưa tự mở. Hãy sao chép nội dung đơn bên trên rồi bấm “Nhắn Mộc trên Zalo”.";
  }
});

document.querySelector("#dialog-close").addEventListener("click", () => {
  orderDialog.close();
});

orderDialog.addEventListener("click", (event) => {
  if (event.target === orderDialog) orderDialog.close();
});

async function copyOrderToClipboard() {
  try {
    await navigator.clipboard.writeText(orderMessage.value);
    copyStatus.textContent = "Đã sao chép đơn. Dán vào khung chat Zalo rồi nhấn gửi nhé.";
    return true;
  } catch {
    orderMessage.focus();
    orderMessage.select();
    const copied = document.execCommand("copy");
    copyStatus.textContent = copied
      ? "Đã sao chép đơn. Dán vào khung chat Zalo rồi nhấn gửi nhé."
      : "Không thể tự sao chép. Hãy sao chép nội dung đơn bên trên rồi dán vào Zalo.";
    return copied;
  }
}

document.querySelector("#copy-order").addEventListener("click", copyOrderToClipboard);

renderCategories();
renderMenu();
renderToppings();
renderCart();
loadOrderHistory();
renderOrderHistory();

const embeddedFeedbackPdf = document.querySelector("#embedded-feedback-pdf");
if (embeddedFeedbackPdf) {
  document.querySelectorAll("[data-feedback-pdf]").forEach((link) => {
    link.href = embeddedFeedbackPdf.href;
  });
}
