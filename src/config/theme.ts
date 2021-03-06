export type Theme = {
  backgrounds: {
    default: string
  }
  font: {
    colors: {
      primary: string
    }
    typography: {
      sizes: {
        systemDefault: string
      }
      lineHeights: {
        systemDefault: string
      }
      weights: {
        systemDefault: string
      }
    }
  }
  window: {
    bar: {
      borderColor: string
      backgroundColor: string
    }
    pane: {
      backgroundColor: string
      borderColor: string
    }
  }
  appBar: {
    backgroundColor: string
    borderColor: string
  }
}

export const theme: Theme = {
  backgrounds: {
    default: "#BFBFBF",
  },
  font: {
    colors: {
      primary: "#000000",
    },
    typography: {
      sizes: {
        systemDefault: "1rem",
      },
      lineHeights: {
        systemDefault: "1.35rem",
      },
      weights: {
        systemDefault: "400",
      },
    },
  },
  window: {
    bar: {
      borderColor: "#000000",
      backgroundColor: "#FFFFFF",
    },
    pane: {
      backgroundColor: "#FFFFFF",
      borderColor: "#000000",
    },
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
  },
}
