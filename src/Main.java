public class Main {

    public static void main(String[] args) {
        Tree tree = new Tree();
        tree.insert(10);
        tree.insert(20);
        tree.insert(8);
        tree.insert(7);
//        tree.pass();
//        tree.passIterative();
        tree.passWidth();
    }

}
