/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OVQCYR1GKD3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BarcodeIcon className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Nutrition Scan</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Past Scans
            </Button>
            <Button>
              <CameraIcon className="w-5 h-5 mr-2" />
              Scan Barcode
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Scan a Product</h2>
          <div className="flex justify-center items-center h-64 bg-muted/20 rounded-lg">
            <BarcodeIcon className="w-16 h-16 text-muted-foreground" />
          </div>
          <p className="mt-4 text-muted-foreground">Point your camera at a product barcode to get started.</p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Acme Protein Bars</h3>
              <p className="text-muted-foreground">Chocolate Chip Flavor</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Nutrition Facts</h4>
                <div className="text-muted-foreground">
                  <p>Calories: 220</p>
                  <p>Total Fat: 9g</p>
                  <p>Carbs: 24g</p>
                  <p>Protein: 20g</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Dietary Info</h4>
                <div className="text-muted-foreground">
                  <p>Gluten-free</p>
                  <p>High Protein</p>
                  <p>No Artificial Sweeteners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-card border-t">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <h2 className="text-xl font-bold mb-4">Past Scans</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-muted/20 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Acme Protein Bars</h3>
                <p className="text-muted-foreground">Chocolate Chip Flavor</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  <p>Calories: 220</p>
                  <p>Protein: 20g</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ExpandIcon className="w-5 h-5" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Organic Veggie Chips</h3>
                <p className="text-muted-foreground">Sea Salt Flavor</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  <p>Calories: 150</p>
                  <p>Carbs: 18g</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ExpandIcon className="w-5 h-5" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Whole Grain Cereal</h3>
                <p className="text-muted-foreground">Honey Oat Flavor</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  <p>Calories: 120</p>
                  <p>Carbs: 24g</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ExpandIcon className="w-5 h-5" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Organic Almond Milk</h3>
                <p className="text-muted-foreground">Unsweetened</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  <p>Calories: 30</p>
                  <p>Fat: 2.5g</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ExpandIcon className="w-5 h-5" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BarcodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function ExpandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
}