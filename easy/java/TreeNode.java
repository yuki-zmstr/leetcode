import javax.swing.plaf.basic.BasicTreeUI.TreeCancelEditingAction;

public class TreeNode {
    int val; // has value, left, and right as a prop
    TreeNode left;
    TreeNode right;

    TreeNode() {
    } // constructor

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}