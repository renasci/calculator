export const rates = {
  backblaze: {
    orderLimits: {
      min: 7,
      max: null
    },
    storageRates: {
      default: {
        price: 0.005,
        freeLimit: 0
      }
    },
    transferRates: {
      default: {
        price: 0.01,
        freeLimit: 0
      }
    }

  },
  bunny: {
    orderLimits: {
      min: null,
      max: 10  
    },
    storageRates: {
      hdd: {
        price: 0.01,
        freeLimit: 0
      },
      ssd: {
        price: 0.02,  
        freeLimit: 0
      }
    },
    transferRates: {
      hdd: {
        price: 0.01,
        freeLimit: 0
      },
      ssd: {
        price: 0.01,
        freeLimit: 0
      }
      
    }

  },
  scaleway: {
    orderLimits: {
      min: null,
      max: null
    },
    storageRates: {
      multi: {
        price: 0.06,  
        freeLimit: 75
      },
      single: {
        price: 0.03,
        freeLimit: 75
      }
    },
    transferRates: {
      multi: {
        price: 0.02,
        freeLimit: 75
      },
      single: {
        price: 0.02,
        freeLimit: 75
      }
      
    }

  },
  vultr: {
    orderLimits: {
      min: 5,
      max: null
    },
    storageRates: {
      default: {
        price: 0.01,
        freeLimit: 0
      }
    },
    transferRates: {
      default: {
        price: 0.01,
        freeLimit: 0
      }
    }

  }
}