import {
  Button,
  BUTTON_VARIANT__OUTLINE,
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from '@lunar-js/lunar';

const HomePage = () => {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Lunar Dialog SSR Testing</h1>

      <div style={{ margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
        <h2>Basic Dialog Test</h2>
        <p>Tests basic dialog functionality with SSR compatibility</p>
        <Dialog renderTrigger={() => <DialogTrigger>Open Basic Dialog</DialogTrigger>}>
          <DialogContent>
            <DialogHeader>
              <h3>SSR Dialog Test</h3>
            </DialogHeader>
            <div>
              <p>This dialog tests SSR compatibility and polyfill loading.</p>
              <p>The dialog-closedby-polyfill should load only on the client side.</p>
              <p>All interactions should work correctly after hydration.</p>
            </div>
            <DialogFooter>
              <DialogClose>Close Dialog</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div style={{ margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
        <h2>Close Behavior Test</h2>
        <p>Tests different closedby attribute values</p>
        <Dialog
          closedby="closerequest"
          renderTrigger={() => <DialogTrigger>Open Dialog (Close Request Only)</DialogTrigger>}
        >
          <DialogContent>
            <DialogHeader>
              <h3>Close Request Only Dialog</h3>
            </DialogHeader>
            <div>
              <p>
                This dialog uses closedby=&quot;closerequest&quot; - it should only close via the close button or ESC
                key.
              </p>
              <p>Clicking the backdrop should NOT close this dialog.</p>
            </div>
            <DialogFooter>
              <DialogClose>Close Dialog</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Custom Trigger Test</h2>
        <p>Tests renderTrigger prop functionality with SSR</p>
        <Dialog
          renderTrigger={openDialog => (
            <button
              style={{
                background: 'linear-gradient(45deg, #007bff, #28a745)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={openDialog}
            >
              🚀 Custom Styled Trigger
            </button>
          )}
        >
          <DialogContent>
            <DialogHeader>
              <h3>Custom Trigger Dialog</h3>
            </DialogHeader>
            <div>
              <p>This dialog uses the renderTrigger prop to provide a custom trigger element.</p>
              <p>This tests that custom triggers work correctly with SSR and hydration.</p>
              <form style={{ margin: '10px 0' }}>
                <label htmlFor="testInput">Test form input:</label>
                <input
                  id="testInput"
                  type="text"
                  placeholder="Test focus management"
                  style={{ margin: '0 10px', padding: '5px' }}
                />
              </form>
            </div>
            <DialogFooter>
              <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default HomePage;
