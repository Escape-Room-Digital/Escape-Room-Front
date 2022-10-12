<script setup>
defineProps({
  clue: String,
  id: Number,
});
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="'showModal' + id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Pista</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="createView">
              <p>{{ clue }}</p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button data-bs-dismiss="modal" id="cancelButton">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
