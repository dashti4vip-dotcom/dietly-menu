const categories = [
  { id: 'breakfast', ar: 'الفطور', en: 'Breakfast', items: ['clubhouse-sandwich','dietly-breakfast','roasted-halloumi-croissant','honey-mustard-turkey-egg-wrap'] },
  { id: 'salads', ar: 'السلطات', en: 'Salads', items: ['white-turkey-sandwich','buffalo-chicken-salad','dietly-salad','chicken-caesar-salad','green-garden-salad','steak-house-salad','rocca-salad'] },
  { id: 'wraps', ar: 'الراب', en: 'Wraps', items: ['buffalo-chicken-wrap','chicken-honey-mustard-wrap','chicken-shawarma-wrap','chicken-twister-wrap'] },
  { id: 'chicken-burgers', ar: 'برجر الدجاج', en: 'Chicken Burgers', items: ['buffalo-chicken-burger','dietly-grilled-chicken-burger','mc-chicken-burger','lulu-chicken-burger'] },
  { id: 'beef-burgers', ar: 'برجر اللحم', en: 'Beef Burgers', items: ['dietly-burger','classic-beef-burger','purple-beef-burger','swiss-beef-mushroom-burger'] },
  { id: 'chicken-dishes', ar: 'أطباق الدجاج', en: 'Chicken Dishes', items: ['dietly-grilled-chicken','buffalo-chicken-ranch','mongolian-chicken','butter-chicken','chicken-dumplings-biryani','chicken-milano-loaded','coconut-curry-chicken','chicken-roll','chicken-strips','green-herb-chicken','italian-grilled-chicken','lemon-herb-grilled-chicken','mushroom-chicken','sesame-chicken','tandoori-chicken'] },
  { id: 'beef-dishes', ar: 'أطباق اللحم', en: 'Beef Dishes', items: ['beef-biryani','beef-chemichurri','beef-fajita','beef-loaded-khalid','mongolian-beef','bbq-beef-steak','mushroom-beef-steak','jamaican-beef-steak','stir-fried-beef','thai-curry-beef'] },
  { id: 'seafood', ar: 'المأكولات البحرية', en: 'Seafood', items: ['dietly-grilled-fish','creamy-garlic-salmon','fish-and-chips','fish-dum-biryani','lemon-grilled-salmon','salmon-lemon-curry','brazilian-salmon','shrimp-biryani','shrimp-creamy-garlic','curry-lemon-shrimp','tandoori-tikka-fish','tuna-corn-pepper','tuna-lemon-pepper'] },
  { id: 'pasta', ar: 'الباستا', en: 'Pasta', items: ['alfredo-chicken-pasta','bolognese-beef-pasta','fettuccine-shrimp-pasta','pink-chicken-pasta','arabiata-pasta'] },
  { id: 'pizza', ar: 'البيتزا', en: 'Pizza', items: ['pepperoni-pizza','margherita-pizza','chicken-ranch-bbq-pizza','chicken-hawaiian-pizza','beef-bolognese-pizza'] },
  { id: 'desserts', ar: 'الحلويات', en: 'Desserts', items: ['dietly-protein-bar','chocolate-brownie','berry-protein-cheesecake','blueberry-cheesecake','coffee-cookies-protein','matcha-protein-cheesecake'] },
  { id: 'smoothies', ar: 'السموذي والمشروبات', en: 'Smoothies & Beverages', items: ['berry-crush-smoothie','choco-chips-smoothie','chunky-peanut-butter-smoothie','mango-smoothie','mocha-smoothie','maxi-carb'] },
  { id: 'drinks', ar: 'المشروبات الباردة', en: 'Cold Drinks', items: ['water','soda','green-cola'] }
];

const prettyNames = {
  'clubhouse-sandwich':'Clubhouse Sandwich','dietly-breakfast':'Dietly Breakfast','roasted-halloumi-croissant':'Roasted Halloumi Croissant','honey-mustard-turkey-egg-wrap':'Honey Mustard Turkey & Egg Wrap',
  'white-turkey-sandwich':'White Turkey Sandwich','buffalo-chicken-salad':'Buffalo Chicken Salad','dietly-salad':'Dietly Salad','chicken-caesar-salad':'Chicken Caesar Salad','green-garden-salad':'Green Garden Salad','steak-house-salad':'Steak House Salad','rocca-salad':'Rocca Salad',
  'buffalo-chicken-wrap':'Buffalo Chicken Wrap','chicken-honey-mustard-wrap':'Chicken Honey Mustard Wrap','chicken-shawarma-wrap':'Chicken Shawarma Wrap','chicken-twister-wrap':'Chicken Twister Wrap',
  'buffalo-chicken-burger':'Buffalo Chicken Burger','dietly-grilled-chicken-burger':'Dietly Grilled Chicken Burger','mc-chicken-burger':'Mc Chicken Burger','lulu-chicken-burger':'Lulu Chicken Burger',
  'dietly-burger':'Dietly Burger','classic-beef-burger':'Classic Beef Burger','purple-beef-burger':'Purple Beef Burger','swiss-beef-mushroom-burger':'Swiss Beef Mushroom Burger',
  'dietly-grilled-chicken':'Dietly Grilled Chicken','buffalo-chicken-ranch':'Buffalo Chicken Ranch','mongolian-chicken':'Mongolian Chicken','butter-chicken':'Butter Chicken','chicken-dumplings-biryani':'Chicken Dumplings Biryani','chicken-milano-loaded':'Chicken Milano Loaded','coconut-curry-chicken':'Coconut Curry Chicken','chicken-roll':'Chicken Roll','chicken-strips':'Chicken Strips','green-herb-chicken':'Green Herb Chicken','italian-grilled-chicken':'Italian Grilled Chicken','lemon-herb-grilled-chicken':'Lemon Herb Grilled Chicken','mushroom-chicken':'Mushroom Chicken','sesame-chicken':'Sesame Chicken','tandoori-chicken':'Tandoori Chicken',
  'beef-biryani':'Beef Biryani','beef-chemichurri':'Beef Chimichurri','beef-fajita':'Beef Fajita','beef-loaded-khalid':'Beef Loaded (Khalid Meal)','mongolian-beef':'Mongolian Beef','bbq-beef-steak':'BBQ Beef Steak','mushroom-beef-steak':'Mushroom Beef Steak','jamaican-beef-steak':'Jamaican Beef Steak','stir-fried-beef':'Stir-Fried Beef','thai-curry-beef':'Thai Curry Beef',
  'dietly-grilled-fish':'Dietly Grilled Fish','creamy-garlic-salmon':'Creamy Garlic Salmon','fish-and-chips':'Fish and Chips','fish-dum-biryani':'Fish Dum Biryani','lemon-grilled-salmon':'Lemon Grilled Salmon','salmon-lemon-curry':'Salmon Lemon Curry','brazilian-salmon':'Brazilian Salmon','shrimp-biryani':'Shrimp Biryani','shrimp-creamy-garlic':'Shrimp with Creamy Garlic Sauce','curry-lemon-shrimp':'Curry Lemon Shrimp','tandoori-tikka-fish':'Tandoori Tikka Fish','tuna-corn-pepper':'Tuna Corn Pepper','tuna-lemon-pepper':'Tuna Lemon Pepper',
  'alfredo-chicken-pasta':'Alfredo Chicken Pasta','bolognese-beef-pasta':'Bolognese Beef Pasta','fettuccine-shrimp-pasta':'Fettuccine Shrimp Pasta','pink-chicken-pasta':'Pink Chicken Pasta','arabiata-pasta':'Arrabbiata Pasta',
  'pepperoni-pizza':'Pepperoni Pizza','margherita-pizza':'Margherita Pizza','chicken-ranch-bbq-pizza':'Chicken Ranch BBQ Pizza','chicken-hawaiian-pizza':'Chicken Hawaiian Pizza','beef-bolognese-pizza':'Beef Bolognese Pizza',
  'dietly-protein-bar':'Dietly Protein Bar','chocolate-brownie':'Chocolate Brownie','berry-protein-cheesecake':'Berry Protein Cheesecake','blueberry-cheesecake':'Blueberry Cheesecake','coffee-cookies-protein':'Coffee Cookies with Protein','matcha-protein-cheesecake':'Matcha Protein Cheesecake',
  'berry-crush-smoothie':'Berry Crush Smoothie','choco-chips-smoothie':'Choco Chips Smoothie','chunky-peanut-butter-smoothie':'Chunky Peanut Butter Smoothie','mango-smoothie':'Mango Smoothie','mocha-smoothie':'Mocha Smoothie','maxi-carb':'Maxi Carb',
  'water':'Water','soda':'Soda','green-cola':'Green Cola'
};

const corrections = {
  'fish-and-chips': {
    title: 'Fish and Chips',
    en: 'Crispy fish fillet served with seasoned potato wedges and a light dipping sauce.',
    ar: 'فيليه سمك مقرمش يقدم مع شرائح بطاطا متبلة وصوص خفيف.'
  },
  'bbq-beef-steak': {
    title: 'BBQ Beef Steak',
    en: 'Marinated beef steak tossed with the chef’s BBQ sauce.',
    ar: 'ستيك لحم متبل يقدم مع صوص الشيف باربيكيو.'
  }
};

let currentLang = 'ar';
const menuRoot = document.getElementById('menuRoot');
const drawerNav = document.getElementById('drawerNav');
const quickChips = document.getElementById('quickChips');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const searchStatus = document.getElementById('searchStatus');

function renderMenu() {
  menuRoot.innerHTML = '';
  drawerNav.innerHTML = '';
  quickChips.innerHTML = '';

  categories.forEach(category => {
    const section = document.createElement('section');
    section.className = 'menu-section';
    section.id = category.id;
    section.dataset.category = `${category.ar} ${category.en}`.toLowerCase();

    section.innerHTML = `
      <div class="section-heading">
        <div>
          <h2><span>${currentLang === 'ar' ? category.ar : category.en}</span></h2>
          <p>${currentLang === 'ar' ? category.en : category.ar}</p>
        </div>
        <div class="section-count" aria-label="${category.items.length} items">${category.items.length}</div>
      </div>
      <div class="menu-grid"></div>`;

    const grid = section.querySelector('.menu-grid');
    category.items.forEach(slug => {
      const name = prettyNames[slug] || slug.replaceAll('-', ' ');
      const card = document.createElement('figure');
      card.className = 'menu-card';
      card.dataset.search = `${slug} ${name} ${category.ar} ${category.en}`.toLowerCase();
      card.dataset.name = name;
      card.innerHTML = `<img src="assets/cards/${slug}.webp" alt="${name}" loading="lazy" decoding="async" />`;
      if (corrections[slug]) {
        const c = corrections[slug];
        card.innerHTML += `
          <span class="corrected-badge">${currentLang === 'ar' ? 'وصف مصحح' : 'Corrected'}</span>
          <div class="correction-overlay">
            <strong>${c.title}</strong>
            <span class="en">${c.en}</span>
            <span class="ar">${c.ar}</span>
          </div>`;
      }
      grid.appendChild(card);
    });
    menuRoot.appendChild(section);

    const navLink = document.createElement('a');
    navLink.href = `#${category.id}`;
    navLink.innerHTML = `<span>${currentLang === 'ar' ? category.ar : category.en}</span><small>${currentLang === 'ar' ? category.en : category.ar}</small>`;
    navLink.addEventListener('click', closeDrawer);
    drawerNav.appendChild(navLink);

    const chip = document.createElement('a');
    chip.href = `#${category.id}`;
    chip.textContent = currentLang === 'ar' ? category.ar : category.en;
    quickChips.appendChild(chip);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  searchInput.placeholder = lang === 'ar' ? 'ابحث عن وجبة...' : 'Search for a meal...';
  searchInput.setAttribute('aria-label', searchInput.placeholder);
  document.querySelector('.lang-ar').classList.toggle('active', lang === 'ar');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');
  renderMenu();
  if (searchInput.value) filterMenu(searchInput.value);
}

function filterMenu(query) {
  const q = query.trim().toLowerCase();
  let totalVisible = 0;
  clearSearch.hidden = !q;

  document.querySelectorAll('.menu-section').forEach(section => {
    let visibleInSection = 0;
    section.querySelectorAll('.menu-card').forEach(card => {
      const match = !q || card.dataset.search.includes(q);
      card.hidden = !match;
      if (match) visibleInSection++;
    });
    section.hidden = q && visibleInSection === 0;
    const count = section.querySelector('.section-count');
    count.textContent = visibleInSection;
    totalVisible += visibleInSection;
  });

  if (q) {
    searchStatus.hidden = false;
    searchStatus.textContent = totalVisible
      ? (currentLang === 'ar' ? `تم العثور على ${totalVisible} نتيجة` : `${totalVisible} results found`)
      : (currentLang === 'ar' ? 'ما لقينا وجبة بهذا الاسم. جرّب اسم ثاني أو اختر قسم من القائمة.' : 'No matching meals. Try another name or choose a section.');
  } else {
    searchStatus.hidden = true;
  }
}

const menuTrigger = document.getElementById('menuTrigger');
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
function openDrawer() {
  drawerBackdrop.hidden = false;
  requestAnimationFrame(() => drawer.classList.add('open'));
  drawer.setAttribute('aria-hidden','false');
  menuTrigger.setAttribute('aria-expanded','true');
  document.body.classList.add('drawer-open');
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  menuTrigger.setAttribute('aria-expanded','false');
  document.body.classList.remove('drawer-open');
  setTimeout(() => { drawerBackdrop.hidden = true; }, 320);
}
menuTrigger.addEventListener('click', openDrawer);
document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

document.getElementById('langToggle').addEventListener('click', () => applyLanguage(currentLang === 'ar' ? 'en' : 'ar'));
searchInput.addEventListener('input', e => filterMenu(e.target.value));
clearSearch.addEventListener('click', () => { searchInput.value = ''; filterMenu(''); searchInput.focus(); });

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => toTop.classList.toggle('show', window.scrollY > 900), { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

renderMenu();
