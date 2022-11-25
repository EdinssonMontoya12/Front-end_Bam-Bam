//modal de facturas
const targetFactura = document.getElementById('facturas-modal');

//modal de Inventario
const targetInventario = document.getElementById('inventario-modal');

//Modal de Terceros
const targetTerceros = document.getElementById('terceros-modal');

const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');

// options with default values
const options = {
  placement: 'bottom-right',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};