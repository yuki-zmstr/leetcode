import java.util.*;

class MinStack {
    private Stack<Integer> s;
    private PriorityQueue<Integer> pq;
    private HashMap<Integer, Integer> hm;

    public MinStack() {
        s = new Stack<Integer>();
        pq = new PriorityQueue<Integer>();
        hm = new HashMap<Integer, Integer>();
    }

    public void push(int val) {
        s.push(val);
        pq.add(val);
    }

    public void pop() {
        if (s.peek() == pq.peek()) { // able to delete
            s.pop();
            pq.remove();
        } else { // unable to delete from pq.
            int popped = s.pop();
            if (hm.containsKey(popped)) {
                hm.put(popped, hm.get(popped) + 1);
            } else {
                hm.put(popped, 1);
            }
        }
        // lazy deletion.
        while (hm.containsKey(pq.peek()) && hm.get(pq.peek()) > 0) {
            hm.put(pq.peek(), hm.get(pq.peek()) - 1);
            pq.remove();
        }
    }

    public int top() {
        return s.peek();
    }

    public int getMin() {
        return pq.peek();
    }

    public static void main(String[] args) {
        MinStack ms = new MinStack();
        ms.push(0);
        ms.push(0);
        ms.push(0);
        ms.push(0);
        ms.push(0);
        ms.push(0);
        ms.pop();
        System.out.println(ms.getMin());
    }
}
