<script setup lang="ts">
const { locale } = useI18n();

onMounted(() => {
  /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
  var bodyOvrelay = $("#body-overlay");
  var searchPopup = $("#td-search-popup");
  var sidebarMenu = $("#sidebar-menu");

  $(document).on("click", "#body-overlay", function (e) {
    e.preventDefault();
    bodyOvrelay.removeClass("active");
    searchPopup.removeClass("active");
    sidebarMenu.removeClass("active");
  });
  $(document).on("click", ".search-bar-btn", function (e) {
    e.preventDefault();
    searchPopup.addClass("active");
    bodyOvrelay.addClass("active");
  });
});
</script>
<template>
  <!-- search popup start-->
  <div class="td-search-popup" id="td-search-popup">
    <form action="index.html" class="search-form">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search....." />
      </div>
      <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
    </form>
  </div>
  <!-- search popup end-->
</template>
