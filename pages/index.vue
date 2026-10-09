<template>
  <div class="homepage-structure">
    <!-- ============================================================= -->
    <!-- SECTION 01: Hero (Built)                                      -->
    <!-- ============================================================= -->
    <HeroSection />

    <!-- ============================================================= -->
    <!-- SECTION 02: Systematic Clarity & Creativity (Built)           -->
    <!-- ============================================================= -->
    <EditorialStatementSection />

    <!-- ============================================================= -->
    <!-- SECTION 03: Studio Discipline & Scope Statement (Built)       -->
    <!-- ============================================================= -->
    <StudioStatementSection />

    <!-- ============================================================= -->
    <!-- SECTION 04: From Sketch to Strategy (Built)                    -->
    <!-- ============================================================= -->
    <SketchToStrategySection />

    <!-- ============================================================= -->
    <!-- SECTION 05: Precision in Development (Built)                  -->
    <!-- ============================================================= -->
    <PrecisionInDevelopmentSection />

    <!-- ============================================================= -->
    <!-- SECTION 06: Selected Projects (Built)                         -->
    <!-- ============================================================= -->
    <SelectedProjectsSection />

    <!-- ============================================================= -->
    <!-- ============================================================= -->
    <!-- SECTION 07: Radial Philosophy (White to Black Bearing)         -->
    <!-- ============================================================= -->
    <RadialPhilosophySection />

    <!-- ============================================================= -->
    <!-- SECTION 08: People & Process / Foundation / Metrics (Unified)  -->
    <!-- ============================================================= -->
    <PeopleProcessSection />

    <!-- ============================================================= -->
    <!-- SECTION 09: Ambitious Brands Rotating Logos Section            -->
    <!-- ============================================================= -->
    <AmbitiousBrandsSection />

    <!-- ============================================================= -->
    <!-- SECTION 10: Monumental Architectural Footer (1-to-1 Match)     -->
    <!-- ============================================================= -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import EditorialStatementSection from '~/components/EditorialStatementSection.vue';
import StudioStatementSection from '~/components/StudioStatementSection.vue';
import SketchToStrategySection from '~/components/SketchToStrategySection.vue';
import PrecisionInDevelopmentSection from '~/components/PrecisionInDevelopmentSection.vue';
import SelectedProjectsSection from '~/components/SelectedProjectsSection.vue';
import RadialPhilosophySection from '~/components/RadialPhilosophySection.vue';
import PeopleProcessSection from '~/components/PeopleProcessSection.vue';
import AmbitiousBrandsSection from '~/components/AmbitiousBrandsSection.vue';
import AppFooter from '~/components/AppFooter.vue';

useSeoMeta({
  title: 'Incredible Groups - Architectural & Investment Atelier',
  ogTitle: 'Incredible Groups - Architectural & Investment Atelier',
  description: 'Incredible Groups develops ultra-luxury architectural landmarks and allocates sovereign capital across category-defining venture portfolios in India.',
  ogDescription: 'Pioneering ultra-luxury real estate landmarks, private coastal sanctuaries, and strategic alternative investment portfolios across India.'
});
</script>

<style scoped lang="scss">
.homepage-structure {
  position: relative;
  width: 100%;
}
</style>
