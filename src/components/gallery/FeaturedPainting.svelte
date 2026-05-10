<script>
  import { fade } from 'svelte/transition';
  
  let { title, medium, year, description, imageSrc, imageAlt } = $props();
  let isHovered = $state(false);
</script>

<div class="flex flex-col md:flex-row items-center gap-12 md:gap-24 py-12">
  <!-- Left Side: Image -->
  <div 
    class="w-full max-w-sm aspect-[4/5] relative overflow-hidden bg-[#121212] shadow-2xl cursor-crosshair shrink-0"
    onmouseenter={() => isHovered = true}
    onmouseleave={() => isHovered = false}
    role="banner"
  >
    <img 
      src={imageSrc} 
      alt={imageAlt}
      class="w-full h-full object-cover transition-transform duration-1000 ease-out {isHovered ? 'scale-105 opacity-70' : 'scale-100 opacity-100'}"
    />
    <div class="absolute inset-0 bg-black/40 transition-opacity duration-500 {isHovered ? 'opacity-100' : 'opacity-0'}"></div>
    
    <!-- Optional small text below image if desired, keeping it clean for now -->
  </div>

  <!-- Right Side: Interactive Text -->
  <div class="relative flex-grow h-[300px] flex items-center">
    {#if !isHovered}
      <div 
        transition:fade={{ duration: 400 }}
        class="absolute inset-0 flex items-center"
      >
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-light text-white/90 leading-tight max-w-xl">
          sentuhan untuk<br/> melihat detail
        </h2>
      </div>
    {:else}
      <div 
        transition:fade={{ duration: 400 }}
        class="absolute inset-0 flex flex-col justify-center"
      >
        <span class="text-sienna text-sm tracking-[0.3em] uppercase mb-4 block">
          tentang lukisan ini
        </span>
        <h3 class="text-2xl md:text-3xl font-serif italic text-white mb-6">
          {title}
        </h3>
        <p class="text-lg md:text-xl text-white/60 leading-relaxed max-w-md font-light">
          {description || "Eksplorasi mendalam tentang emosi dan tekstur dalam setiap goresan."}
        </p>
        <div class="mt-8 text-[10px] tracking-[0.2em] uppercase text-white/20">
          {medium} &middot; {year}
        </div>
      </div>
    {/if}
  </div>
</div>
